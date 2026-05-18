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
import { Youtube } from '@tiptap/extension-youtube';
import { Subscript } from '@tiptap/extension-subscript';
import { Superscript } from '@tiptap/extension-superscript';
import { Typography } from '@tiptap/extension-typography';
import { all, createLowlight } from 'lowlight';

const lowlight = createLowlight(all);

export default function BlogRenderer({ content }: { content: Record<string, unknown> }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline, Link, Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight.configure({ multicolor: true }),
      TextStyle, Color, FontFamily,
      Table, TableRow, TableHeader, TableCell,
      TaskList, TaskItem.configure({ nested: true }),
      CodeBlockLowlight.configure({ lowlight }),
      Youtube, Subscript, Superscript, Typography,
    ],
    content,
    editable: false,
    editorProps: {
      attributes: { style: 'font-size:17px;line-height:1.85;color:#334155;outline:none;' },
    },
  });

  return (
    <>
      <EditorContent editor={editor} />
      <style>{`
        .ProseMirror h1 { font-size:2rem; font-weight:800; margin:2rem 0 .75rem; color:#0A192F; letter-spacing:-.02em; }
        .ProseMirror h2 { font-size:1.6rem; font-weight:700; margin:2rem 0 .75rem; color:#0A192F; }
        .ProseMirror h3 { font-size:1.3rem; font-weight:700; margin:1.5rem 0 .5rem; color:#0A192F; }
        .ProseMirror h4,.ProseMirror h5,.ProseMirror h6 { font-size:1.1rem; font-weight:700; margin:1.25rem 0 .5rem; color:#0A192F; }
        .ProseMirror p { margin-bottom:1.25rem; }
        .ProseMirror ul,.ProseMirror ol { padding-left:1.75rem; margin-bottom:1.25rem; }
        .ProseMirror li { margin-bottom:.4rem; }
        .ProseMirror blockquote { border-left:4px solid #2563eb; margin:2rem 0; padding:1rem 1.5rem; background:#F8FAFC; border-radius:0 10px 10px 0; font-style:italic; color:#475569; }
        .ProseMirror code { background:#F1F5F9; border-radius:4px; padding:2px 6px; font-size:.875em; color:#dc2626; font-family:'Courier New',monospace; }
        .ProseMirror pre { background:#0f172a; color:#e2e8f0; border-radius:10px; padding:1.25rem 1.5rem; margin:1.75rem 0; overflow-x:auto; }
        .ProseMirror pre code { background:none; color:inherit; padding:0; font-size:.875em; }
        .ProseMirror hr { border:none; border-top:2px solid #E2E8F0; margin:2.5rem 0; }
        .ProseMirror img { max-width:100%; border-radius:10px; margin:1.5rem 0; }
        .ProseMirror a { color:#2563eb; text-decoration:underline; }
        .ProseMirror table { border-collapse:collapse; width:100%; margin:1.75rem 0; }
        .ProseMirror th,.ProseMirror td { border:1px solid #E2E8F0; padding:10px 14px; text-align:left; }
        .ProseMirror th { background:#F8FAFC; font-weight:700; color:#0A192F; }
        .ProseMirror ul[data-type="taskList"] { list-style:none; padding-left:0; }
        .ProseMirror ul[data-type="taskList"] li { display:flex; align-items:flex-start; gap:8px; }
        .ProseMirror mark { border-radius:3px; padding:1px 3px; }
        .ProseMirror iframe { border-radius:10px; width:100%; aspect-ratio:16/9; margin:1.75rem 0; border:none; }
        .ProseMirror sub { vertical-align:sub; font-size:.75em; }
        .ProseMirror sup { vertical-align:super; font-size:.75em; }
      `}</style>
    </>
  );
}
