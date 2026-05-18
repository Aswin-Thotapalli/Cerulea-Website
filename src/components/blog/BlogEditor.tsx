'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { TextAlign } from '@tiptap/extension-text-align';
import { Highlight } from '@tiptap/extension-highlight';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { FontFamily } from '@tiptap/extension-font-family';
import { Table, TableRow, TableCell, TableHeader } from '@tiptap/extension-table';
import { TaskList } from '@tiptap/extension-task-list';
import { TaskItem } from '@tiptap/extension-task-item';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { Placeholder } from '@tiptap/extension-placeholder';
import { CharacterCount } from '@tiptap/extension-character-count';
import { Youtube } from '@tiptap/extension-youtube';
import { Subscript } from '@tiptap/extension-subscript';
import { Superscript } from '@tiptap/extension-superscript';
import { Typography } from '@tiptap/extension-typography';
import { all, createLowlight } from 'lowlight';
import { useCallback, useRef } from 'react';
import { createClient } from '@/lib/supabase';

const lowlight = createLowlight(all);

type Props = {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
};

type ToolbarButtonProps = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
};

function ToolbarButton({ onClick, active, disabled, title, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      disabled={disabled}
      title={title}
      style={{
        padding: '4px 8px', borderRadius: 4, border: 'none',
        background: active ? '#1d4ed8' : 'transparent',
        color: active ? '#fff' : '#374151',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        fontSize: 13, fontWeight: 600, lineHeight: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minWidth: 28, height: 28, transition: 'all 0.15s',
      }}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div style={{ width: 1, height: 20, background: '#E2E8F0', margin: '0 4px', flexShrink: 0 }} />;
}

export default function BlogEditor({ content, onChange }: Props) {
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
      Link.configure({ openOnClick: false, autolink: true }),
      Image.configure({ allowBase64: true, inline: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight.configure({ multicolor: true }),
      TextStyle,
      Color,
      FontFamily,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({ nested: true }),
      CodeBlockLowlight.configure({ lowlight }),
      Placeholder.configure({ placeholder: 'Start writing your blog post...' }),
      CharacterCount,
      Youtube.configure({ width: 720, height: 405 }),
      Subscript,
      Superscript,
      Typography,
    ],
    content: content && Object.keys(content).length > 0 ? content : undefined,
    onUpdate: ({ editor }) => onChange(editor.getJSON() as Record<string, unknown>),
    editorProps: {
      scrollThreshold: { top: 120, bottom: 80, left: 0, right: 0 },
      scrollMargin: { top: 120, bottom: 80, left: 0, right: 0 },
      attributes: {
        style: [
          'min-height:400px', 'padding:24px', 'outline:none',
          'font-size:16px', 'line-height:1.8', 'color:#1a2535', 'font-family:inherit',
        ].join(';'),
      },
    },
  });

  const uploadImage = useCallback(async (file: File) => {
    if (!editor) return;
    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { data, error } = await supabase.storage
      .from('blog-media').upload(fileName, file, { cacheControl: '3600', upsert: false });
    if (error || !data) { alert('Image upload failed: ' + error?.message); return; }
    const { data: { publicUrl } } = supabase.storage.from('blog-media').getPublicUrl(data.path);
    editor.chain().focus().setImage({ src: publicUrl }).run();
  }, [editor, supabase]);

  const addYoutube = useCallback(() => {
    const url = prompt('Paste YouTube or Vimeo URL:');
    if (url) editor?.commands.setYoutubeVideo({ src: url });
  }, [editor]);

  const addLink = useCallback(() => {
    const url = prompt('Enter URL:');
    if (url) editor?.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  const addTable = useCallback(() => {
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  if (!editor) return null;

  const words = editor.storage.characterCount?.words() ?? 0;
  const chars = editor.storage.characterCount?.characters() ?? 0;

  return (
    <div style={{ border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', background: '#fff' }}>

      {/* ── TOOLBAR ── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 2, padding: '8px 12px',
        borderBottom: '1px solid #E2E8F0', background: '#F8FAFC',
        alignItems: 'center', position: 'sticky', top: 64, zIndex: 10,
      }}>
        {/* Headings */}
        <select
          value={
            editor.isActive('heading', { level: 1 }) ? '1' :
            editor.isActive('heading', { level: 2 }) ? '2' :
            editor.isActive('heading', { level: 3 }) ? '3' :
            editor.isActive('heading', { level: 4 }) ? '4' :
            editor.isActive('heading', { level: 5 }) ? '5' :
            editor.isActive('heading', { level: 6 }) ? '6' : '0'
          }
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v === 0) editor.chain().focus().setParagraph().run();
            else editor.chain().focus().setHeading({ level: v as 1|2|3|4|5|6 }).run();
          }}
          style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #E2E8F0', fontSize: 12, background: '#fff', cursor: 'pointer' }}
        >
          <option value="0">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>

        {/* Font Family */}
        <select
          onChange={(e) => {
            if (!e.target.value) editor.chain().focus().unsetFontFamily().run();
            else editor.chain().focus().setFontFamily(e.target.value).run();
          }}
          style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #E2E8F0', fontSize: 12, background: '#fff', cursor: 'pointer' }}
        >
          <option value="">Default font</option>
          <option value="Inter, sans-serif">Inter</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="'Courier New', monospace">Courier</option>
          <option value="Arial, sans-serif">Arial</option>
          <option value="'Times New Roman', serif">Times New Roman</option>
        </select>

        <Divider />

        {/* Text style */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold"><b>B</b></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic"><i>I</i></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline"><u>U</u></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough"><s>S</s></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleSubscript().run()} active={editor.isActive('subscript')} title="Subscript">X₂</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleSuperscript().run()} active={editor.isActive('superscript')} title="Superscript">X²</ToolbarButton>

        <Divider />

        {/* Colors */}
        <label title="Text color" style={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer', fontSize: 12, color: '#374151', padding: '0 4px' }}>
          A <input type="color" defaultValue="#000000"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
            style={{ width: 16, height: 16, border: 'none', cursor: 'pointer', padding: 0 }} />
        </label>
        <label title="Highlight" style={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer', fontSize: 12, color: '#374151', padding: '0 4px' }}>
          ▌ <input type="color" defaultValue="#fef08a"
            onChange={(e) => editor.chain().focus().setHighlight({ color: e.target.value }).run()}
            style={{ width: 16, height: 16, border: 'none', cursor: 'pointer', padding: 0 }} />
        </label>

        <Divider />

        {/* Alignment */}
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align left">≡L</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Center">≡C</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Align right">≡R</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()} active={editor.isActive({ textAlign: 'justify' })} title="Justify">≡J</ToolbarButton>

        <Divider />

        {/* Lists */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet list">• List</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered list">1. List</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleTaskList().run()} active={editor.isActive('taskList')} title="Task list">☑ Task</ToolbarButton>

        <Divider />

        {/* Blocks */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Blockquote">&ldquo; Quote</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline code">`code`</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code block">{'{ }'}</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal rule">──</ToolbarButton>

        <Divider />

        {/* Table */}
        <ToolbarButton onClick={addTable} title="Insert table">⊞ Table</ToolbarButton>
        {editor.isActive('table') && <>
          <ToolbarButton onClick={() => editor.chain().focus().addColumnAfter().run()} title="Add column">+Col</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().addRowAfter().run()} title="Add row">+Row</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().deleteColumn().run()} title="Del column">-Col</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().deleteRow().run()} title="Del row">-Row</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().deleteTable().run()} title="Delete table">✕ Tbl</ToolbarButton>
        </>}

        <Divider />

        {/* Media */}
        <ToolbarButton onClick={() => fileInputRef.current?.click()} title="Upload image">🖼 Image</ToolbarButton>
        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }}
          onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadImage(f); e.target.value = ''; }} />
        <ToolbarButton onClick={addYoutube} title="Embed YouTube / Vimeo">▶ Video</ToolbarButton>
        <ToolbarButton onClick={addLink} active={editor.isActive('link')} title="Add link">🔗 Link</ToolbarButton>
        {editor.isActive('link') && (
          <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()} title="Remove link">✕ Link</ToolbarButton>
        )}

        <Divider />

        {/* History */}
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo">↩</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo">↪</ToolbarButton>
      </div>

      {/* ── EDITOR ── */}
      <EditorContent editor={editor} />

      {/* ── STATUS BAR ── */}
      <div style={{ padding: '6px 16px', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'flex-end', gap: 16, fontSize: 11, color: '#94A3B8', background: '#FAFAFA' }}>
        <span>{words} words</span>
        <span>{chars} characters</span>
      </div>

      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before { content: attr(data-placeholder); float: left; color: #94A3B8; pointer-events: none; height: 0; }
        .ProseMirror h1 { font-size:2rem; font-weight:800; margin:1.5rem 0 .75rem; color:#0A192F; letter-spacing:-.02em; }
        .ProseMirror h2 { font-size:1.5rem; font-weight:700; margin:1.5rem 0 .75rem; color:#0A192F; }
        .ProseMirror h3 { font-size:1.25rem; font-weight:700; margin:1.25rem 0 .5rem; color:#0A192F; }
        .ProseMirror h4,.ProseMirror h5,.ProseMirror h6 { font-size:1rem; font-weight:700; margin:1rem 0 .5rem; color:#0A192F; }
        .ProseMirror p { margin-bottom:1rem; }
        .ProseMirror ul,.ProseMirror ol { padding-left:1.5rem; margin-bottom:1rem; }
        .ProseMirror li { margin-bottom:.25rem; }
        .ProseMirror blockquote { border-left:4px solid #2563eb; margin:1.5rem 0; padding:.75rem 1.25rem; background:#F8FAFC; border-radius:0 8px 8px 0; font-style:italic; color:#475569; }
        .ProseMirror code { background:#F1F5F9; border-radius:4px; padding:2px 6px; font-size:.875em; color:#dc2626; font-family:'Courier New',monospace; }
        .ProseMirror pre { background:#0f172a; color:#e2e8f0; border-radius:8px; padding:1rem 1.25rem; margin:1.5rem 0; overflow-x:auto; }
        .ProseMirror pre code { background:none; color:inherit; padding:0; font-size:.875em; }
        .ProseMirror hr { border:none; border-top:2px solid #E2E8F0; margin:2rem 0; }
        .ProseMirror img { max-width:100%; border-radius:8px; margin:1rem 0; }
        .ProseMirror a { color:#2563eb; text-decoration:underline; }
        .ProseMirror table { border-collapse:collapse; width:100%; margin:1.5rem 0; }
        .ProseMirror th,.ProseMirror td { border:1px solid #E2E8F0; padding:8px 12px; text-align:left; }
        .ProseMirror th { background:#F8FAFC; font-weight:700; color:#0A192F; }
        .ProseMirror ul[data-type="taskList"] { list-style:none; padding-left:0; }
        .ProseMirror ul[data-type="taskList"] li { display:flex; align-items:flex-start; gap:8px; }
        .ProseMirror mark { border-radius:3px; padding:1px 3px; }
        .ProseMirror iframe { border-radius:8px; width:100%; aspect-ratio:16/9; margin:1.5rem 0; border:none; }
        .ProseMirror sub { vertical-align:sub; font-size:.75em; }
        .ProseMirror sup { vertical-align:super; font-size:.75em; }
      `}</style>
    </div>
  );
}
