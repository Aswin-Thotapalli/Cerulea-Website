'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Variants } from 'framer-motion';

const LINKS = {
  studio: 'https://studio.cerulea.app',
  docs: 'https://cerulea.app/docs',
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function CeruleaAIPageLight() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#0A192F', overflowX: 'hidden', pb: 16 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.1), rgba(37, 99, 235, 0.05) 50%, transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography sx={{ color: '#7c3aed', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Cerulea Intelligence
            </Typography>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, maxWidth: 1000, color: '#0A192F' }}>
              On-demand expertise.<br />
              <span style={{ color: '#64748B' }}>Context-aware guidance.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 750, lineHeight: 1.5, mb: 6, fontWeight: 400 }}>
              Stop switching tabs to read generic documentation. Cerulea Intelligence is natively embedded into your Studio workspace, providing hyper-specific answers based on the exact architecture you are building right now.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button 
                href={LINKS.studio}
                target="_blank"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#7c3aed', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                  '&:hover': { bgcolor: '#6d28d9', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(124, 58, 237, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Experience in Studio
              </Button>
              <Button 
                href={LINKS.docs}
                target="_blank"
                variant="outlined" 
                sx={{ 
                  borderColor: '#CBD5E1', color: '#0A192F', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { borderColor: '#94A3B8', bgcolor: 'rgba(0,0,0,0.02)' }
                }}
              >
                Read the Docs
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          
          {/* Feature 1: Workspace Context Awareness */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <ForumOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#0A192F' }}>
                  A chat assistant that actually sees your work.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Generic AI models give generic answers. Cerulea Intelligence is wired directly into your active state machine.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                  When you ask a question, the intelligence engine automatically parses your current visual schema. It knows exactly which entities you have created, what roles exist in your governance panel, and which deployment targets you have selected. You get precise, actionable steps tailored entirely to your active project.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3, pb: 2, borderBottom: '1px solid #E2E8F0' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)' }} />
                    <Typography sx={{ fontWeight: 700, color: '#0A192F', fontSize: '0.9rem' }}>Workspace Context: Linked</Typography>
                  </Stack>
                  <Stack spacing={3}>
                    <Box sx={{ alignSelf: 'flex-end', bgcolor: '#F1F5F9', p: 2, borderRadius: 2, borderBottomRightRadius: 0, maxWidth: '85%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#0A192F', fontWeight: 500 }}>Why is my deployment failing when I try to compile the Vendor schema?</Typography>
                    </Box>
                    <Box sx={{ alignSelf: 'flex-start', bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', p: 2, borderRadius: 2, borderBottomLeftRadius: 0, maxWidth: '90%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#1E2B4D', lineHeight: 1.6 }}>
                        I see you have the <strong>Vendor_Profile</strong> entity active. The issue is a missing primary key. You have defined three standard fields, but Cerulea requires at least one uniquely identifiable key (like a <span style={{ fontFamily: 'monospace', color: '#7c3aed', fontWeight: 600 }}>bytes32</span> ID) for deterministic compilation. Add a primary key field in the properties panel and try again.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 2: Relational Data Modeling Guidance */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3, pb: 2, borderBottom: '1px solid #E2E8F0' }}>
                    <AccountTreeOutlinedIcon sx={{ color: '#7c3aed' }} />
                    <Typography sx={{ fontWeight: 700, color: '#0A192F', fontSize: '0.9rem' }}>Architecture Query</Typography>
                  </Stack>
                  <Stack spacing={3}>
                    <Box sx={{ alignSelf: 'flex-end', bgcolor: '#F1F5F9', p: 2, borderRadius: 2, borderBottomRightRadius: 0, maxWidth: '85%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#0A192F', fontWeight: 500 }}>How do I properly link my 'Vendor_Profile' entity to the 'Supply_Chain_Log' without creating a structural error?</Typography>
                    </Box>
                    <Box sx={{ alignSelf: 'flex-start', bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', p: 2, borderRadius: 2, borderBottomLeftRadius: 0, maxWidth: '90%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#1E2B4D', lineHeight: 1.6 }}>
                        I am analyzing your <strong>Supply_Chain_Log</strong> structure. You currently have the primary key set as a <span style={{ fontFamily: 'monospace', color: '#7c3aed', fontWeight: 600 }}>uint256</span>. To link the <strong>Vendor_Profile</strong>, you must ensure the foreign key field uses an identical integer type, rather than the <span style={{ fontFamily: 'monospace', color: '#7c3aed', fontWeight: 600 }}>bytes32</span> format you are currently using. Change the data type in the right-hand properties panel to establish a valid mapping.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <AccountTreeOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#0A192F' }}>
                  Resolve complex data structures instantly.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  When mapping out relational architecture, type mismatches and cyclic dependencies can halt development.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                  Instead of guessing how to structure your blockchain entities, ask the intelligence engine. It will walk you through establishing primary and foreign keys, matching cryptographic data types, and ensuring your models translate perfectly into optimized network state.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 3: Governance & Security Assistance */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <SecurityOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#0A192F' }}>
                  Guided security and RBAC setup.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Do not leave access control to trial and error. Get precise instructions on configuring governance boundaries.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                  Role-Based Access Control (RBAC) and multi-signature policies can be intricate. If you are unsure how to restrict a specific state transition, query the engine. It will provide exact step-by-step guidance on which roles to create and how to bind them to your critical functions before deployment.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3, pb: 2, borderBottom: '1px solid #E2E8F0' }}>
                    <SecurityOutlinedIcon sx={{ color: '#7c3aed' }} />
                    <Typography sx={{ fontWeight: 700, color: '#0A192F', fontSize: '0.9rem' }}>Governance Query</Typography>
                  </Stack>
                  <Stack spacing={3}>
                    <Box sx={{ alignSelf: 'flex-end', bgcolor: '#F1F5F9', p: 2, borderRadius: 2, borderBottomRightRadius: 0, maxWidth: '85%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#0A192F', fontWeight: 500 }}>How do I make sure only the original creator can modify the 'Asset_Metadata' field?</Typography>
                    </Box>
                    <Box sx={{ alignSelf: 'flex-start', bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', p: 2, borderRadius: 2, borderBottomLeftRadius: 0, maxWidth: '90%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#1E2B4D', lineHeight: 1.6 }}>
                        To secure the <strong>Asset_Metadata</strong> field, navigate to the Governance tab. Select the 'Update' action for that specific entity, and bind it to the <strong>Owner_Address</strong> variable. This ensures the compiled smart contract will automatically revert any modification attempts made by non-owners.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 4: Interactive Integration Docs */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3, pb: 2, borderBottom: '1px solid #E2E8F0' }}>
                    <MenuBookOutlinedIcon sx={{ color: '#7c3aed' }} />
                    <Typography sx={{ fontWeight: 700, color: '#0A192F', fontSize: '0.9rem' }}>Integration Query</Typography>
                  </Stack>
                  <Stack spacing={3}>
                    <Box sx={{ alignSelf: 'flex-end', bgcolor: '#F1F5F9', p: 2, borderRadius: 2, borderBottomRightRadius: 0, maxWidth: '85%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#0A192F', fontWeight: 500 }}>Can you generate the exact API endpoint and JSON payload I need to send records from our company's internal inventory system to the 'Invoice_Data' table?</Typography>
                    </Box>
                    <Box sx={{ alignSelf: 'flex-start', bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', p: 2, borderRadius: 2, borderBottomLeftRadius: 0, maxWidth: '100%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#1E2B4D', lineHeight: 1.6, mb: 2 }}>
                        Certainly. Based on your active architecture, your inventory system simply needs to send a POST request. Here is the exact payload structure required for integration:
                      </Typography>
                      {/* Light Mode Code Block */}
                      <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 1, border: '1px solid #E2E8F0', fontFamily: 'monospace', fontSize: '0.8rem', color: '#475569' }}>
                        <Box sx={{ color: '#7c3aed', fontWeight: 700 }}>POST</Box> <Box component="span" sx={{ color: '#059669' }}>https://api.cerulea.net/v1/network/invoice-data</Box><br/><br/>
                        <Box component="span" sx={{ color: '#0A192F', fontWeight: 700 }}>Headers:</Box><br/>
                        &nbsp;&nbsp;<Box component="span" sx={{ color: '#2563eb' }}>Authorization:</Box> <Box component="span" sx={{ color: '#059669' }}>{'`Bearer ${api_key}`'}</Box><br/><br/>
                        <Box component="span" sx={{ color: '#0A192F', fontWeight: 700 }}>Payload:</Box><br/>
                        {`{`}<br/>
                        &nbsp;&nbsp;<Box component="span" sx={{ color: '#2563eb' }}>"invoice_id"</Box>: <Box component="span" sx={{ color: '#059669' }}>"INV-8890"</Box>,<br/>
                        &nbsp;&nbsp;<Box component="span" sx={{ color: '#2563eb' }}>"amount"</Box>: <Box component="span" sx={{ color: '#d97706' }}>4500.00</Box>,<br/>
                        &nbsp;&nbsp;<Box component="span" sx={{ color: '#2563eb' }}>"vendor_address"</Box>: <Box component="span" sx={{ color: '#059669' }}>"0x71C...9A"</Box><br/>
                        {`}`}
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <MenuBookOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#0A192F' }}>
                  The end of static documentation.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Generate custom API payloads and integration hooks tailored exactly to your deployment.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                  When it is time to connect your enterprise software or internal databases to the deployed network, you do not have to hunt for the right API documentation. Cerulea Intelligence reads your compiled schema and instantly generates the exact endpoints and JSON payloads your team needs to integrate seamlessly.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}