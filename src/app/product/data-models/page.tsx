'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import FlakyOutlinedIcon from '@mui/icons-material/FlakyOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Variants } from 'framer-motion';

const LINKS = {
  studio: 'https://studio.cerulea.io',
  docs: '/developers/docs',
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

const pageAccent = '#0891b2'; // Vibrant Cyan

export default function CeruleaDataModelsPageLight() {
  // Interactive state for the Schema Migration simulation
  const [schemaVersion, setSchemaVersion] = React.useState('v1');
  
  // Interactive state for the Deploy Buttons
  const [deployStates, setDeployStates] = React.useState<{ [key: string]: string }>({});

  const toggleSchema = () => {
    setSchemaVersion(prev => (prev === 'v1' ? 'v2' : 'v1'));
  };

  const handleDeployTemplate = (templateId: string) => {
    if (deployStates[templateId]) return;
    
    setDeployStates(prev => ({ ...prev, [templateId]: 'Deploying...' }));
    
    setTimeout(() => {
      setDeployStates(prev => ({ ...prev, [templateId]: 'Deployed ✓' }));
    }, 1500);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        {/* Cyan Glow for Data Architecture */}
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: `radial-gradient(ellipse at top, ${pageAccent}15, transparent 70%)`, pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, mb: 4 }}>
              <SchemaOutlinedIcon sx={{ color: pageAccent, fontSize: 20 }} />
              <Typography sx={{ color: pageAccent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Verifiable Data Models
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: 'text.primary' }}>
              Structure your truth.<br />
              <span style={{ color: 'text.secondary' }}>Prove your state.</span>
            </Typography>
            
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 850, lineHeight: 1.5, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Design complex relational database schemas that compile directly into cryptographic logic. Ensure your enterprise data is immutably stored, strictly typed, and permanently verifiable.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: pageAccent, color: '#ffffff', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: `0 4px 14px ${pageAccent}40`,
                  '&:hover': { bgcolor: '#0e7490', transform: 'translateY(-2px)', boxShadow: `0 6px 20px ${pageAccent}50` },
                  transition: 'all 0.2s'
                }}
              >
                Contact Enterprise Sales
              </Button>
              <Button 
                href={LINKS.docs}
                target="_blank"
                variant="outlined" 
                sx={{ 
                  borderColor: 'divider', color: 'text.primary', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { borderColor: '#94A3B8', bgcolor: 'rgba(0,0,0,0.02)' }
                }}
              >
                View Architecture Docs
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Box sx={{ pb: { xs: 8, md: 12 }, mb: 0 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            
            {/* Feature 1: Visual Schema Builder */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <SchemaOutlinedIcon sx={{ fontSize: 32, color: pageAccent, mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Visual schema definition.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Build relational blockchain structures without writing low-level bytecode.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: `2px solid ${pageAccent}`, pl: 2, textAlign: 'justify' }}>
                    Traditional smart contract development requires hardcoding primitive structs that are difficult to connect. Cerulea Studio provides a visual entity builder. You can define fields, set strict data types (Strings, Integers, Booleans, Addresses), and establish primary key relationships just like you would in a standard SQL database.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Entity: Carbon_Offset_Credit</Typography>
                      <DatasetOutlinedIcon sx={{ color: pageAccent, fontSize: 20 }} />
                    </Box>
                    <Box sx={{ p: 4 }}>
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', fontWeight: 700 }}>credit_id</Typography>
                          <Box sx={{ px: 1.5, py: 0.25, borderRadius: 1, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30` }}>
                            <Typography sx={{ fontSize: '0.7rem', color: pageAccent, fontWeight: 800 }}>BYTES32 (PRIMARY KEY)</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', fontWeight: 700 }}>issuing_authority</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: 'monospace', fontWeight: 600 }}>ADDRESS</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', fontWeight: 700 }}>tonnage_amount</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: 'monospace', fontWeight: 600 }}>UINT256</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', fontWeight: 700 }}>is_retired</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: 'monospace', fontWeight: 600 }}>BOOLEAN</Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 2: On-Chain Referential Integrity */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>FOREIGN KEY RELATIONSHIP</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      {/* Parent Entity */}
                      <Box sx={{ flex: 1, p: 2, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                        <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mb: 1, fontWeight: 700 }}>PARENT ENTITY</Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 800 }}>Corporate_Wallet</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: pageAccent, mt: 1, fontFamily: 'monospace', fontWeight: 600 }}>PK: wallet_id</Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 1 }}>
                        <LinkOutlinedIcon sx={{ color: pageAccent, mb: 0.5 }} />
                        <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary', fontWeight: 800 }}>1 : MANY</Typography>
                      </Box>

                      {/* Child Entity */}
                      <Box sx={{ flex: 1, p: 2, bgcolor: `${pageAccent}05`, border: `1px solid ${pageAccent}30`, borderRadius: 2 }}>
                        <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mb: 1, fontWeight: 700 }}>CHILD ENTITY</Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 800 }}>Issued_Asset</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: pageAccent, mt: 1, fontFamily: 'monospace', fontWeight: 600 }}>FK: owner_wallet_id</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(220, 38, 38, 0.05)', borderRadius: 2, border: '1px solid rgba(220, 38, 38, 0.2)' }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontFamily: 'monospace', fontWeight: 600 }}>
                        [CONSTRAINT] ON DELETE RESTRICT: Cannot delete 'Corporate_Wallet' while active 'Issued_Asset' records depend on it.
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <LinkOutlinedIcon sx={{ fontSize: 32, color: pageAccent, mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Cryptographic referential integrity.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Enforce strict relationships between data sets on the ledger.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: `2px solid ${pageAccent}`, pl: 2, textAlign: 'justify' }}>
                    A blockchain without relational constraints leads to orphaned records and corrupted state. Cerulea allows you to map strict One-to-One and One-to-Many relationships between entities. The platform natively enforces Foreign Key constraints at the protocol level, preventing the deletion or modification of parent records if child dependencies still exist.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 3: Auto-Generated GraphQL */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <SearchOutlinedIcon sx={{ fontSize: 32, color: pageAccent, mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Auto-generated indexing APIs.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Stop writing custom subgraph indexers just to read your own data.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: `2px solid ${pageAccent}`, pl: 2, textAlign: 'justify' }}>
                    Querying raw blockchain state is notoriously slow and inefficient. When you deploy a schema in Cerulea, the platform automatically provisions a high-speed indexing layer. It generates a comprehensive GraphQL endpoint, allowing your frontend applications to query deep, relational on-chain data instantly without managing custom middleware.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                    {/* GraphQL Request */}
                    <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 2, py: 1.5, bgcolor: '#F8FAFC' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: pageAccent }}>GraphQL Query</Typography>
                      </Box>
                      <Box sx={{ p: 2, fontFamily: 'monospace', fontSize: '0.75rem', color: '#172554', lineHeight: 1.6 }}>
                        <div><span style={{ color: '#2563eb', fontWeight: 700 }}>query</span> {'{'}</div>
                        <div style={{ paddingLeft: 16 }}>assets(where: {'{'} value_gt: 10000 {'}'}) {'{'}</div>
                        <div style={{ paddingLeft: 32, color: '#475569', fontWeight: 600 }}>asset_id</div>
                        <div style={{ paddingLeft: 32, color: '#475569', fontWeight: 600 }}>status</div>
                        <div style={{ paddingLeft: 32 }}>owner {'{'}</div>
                        <div style={{ paddingLeft: 48, color: '#475569', fontWeight: 600 }}>kyc_verified</div>
                        <div style={{ paddingLeft: 32 }}>{'}'}</div>
                        <div style={{ paddingLeft: 16 }}>{'}'}</div>
                        <div>{'}'}</div>
                      </Box>
                    </Box>

                    {/* JSON Response */}
                    <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 2, py: 1.5, bgcolor: 'rgba(16, 185, 129, 0.05)' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669' }}>JSON Response (42ms)</Typography>
                      </Box>
                      <Box sx={{ p: 2, fontFamily: 'monospace', fontSize: '0.75rem', color: '#172554', lineHeight: 1.6 }}>
                        <div>{'{'}</div>
                        <div style={{ paddingLeft: 16 }}>"data": {'{'}</div>
                        <div style={{ paddingLeft: 32 }}>"assets": [</div>
                        <div style={{ paddingLeft: 48 }}>{'{'}</div>
                        <div style={{ paddingLeft: 64 }}>"asset_id": <span style={{ color: '#059669', fontWeight: 600 }}>"RWA-992"</span>,</div>
                        <div style={{ paddingLeft: 64 }}>"status": <span style={{ color: '#059669', fontWeight: 600 }}>"ACTIVE"</span>,</div>
                        <div style={{ paddingLeft: 64 }}>"owner": {'{'}</div>
                        <div style={{ paddingLeft: 80 }}>"kyc_verified": <span style={{ color: '#2563eb', fontWeight: 600 }}>true</span></div>
                        <div style={{ paddingLeft: 64 }}>{'}'}</div>
                        <div style={{ paddingLeft: 48 }}>{'}'}</div>
                        <div style={{ paddingLeft: 32 }}>]</div>
                        <div style={{ paddingLeft: 16 }}>{'}'}</div>
                        <div>{'}'}</div>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 4: Automated Schema Migrations (Interactive) */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 800, letterSpacing: '0.05em' }}>SCHEMA MIGRATION PREVIEW</Typography>
                      <Button 
                        onClick={toggleSchema}
                        size="small" 
                        variant="outlined" 
                        sx={{ color: pageAccent, borderColor: pageAccent, '&:hover': { bgcolor: `${pageAccent}15` } }}
                      >
                        {schemaVersion === 'v1' ? 'Upgrade to V2' : 'Revert to V1'}
                      </Button>
                    </Box>
                    
                    <Stack spacing={2}>
                      <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', fontWeight: 600 }}>owner_address</Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 600 }}>Retained</Typography>
                      </Box>
                      <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', fontWeight: 600 }}>asset_value</Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 600 }}>Retained</Typography>
                      </Box>
                      
                      {/* The new field that appears in V2 */}
                      {schemaVersion === 'v2' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                          <Box sx={{ p: 2, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 2, display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>compliance_jurisdiction</Typography>
                            <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontWeight: 800 }}>+ NEW FIELD ADDED</Typography>
                          </Box>
                          <Typography sx={{ fontSize: '0.75rem', color: pageAccent, mt: 2, textAlign: 'center', fontWeight: 600 }}>
                            Historical state automatically mapped to new proxy logic.
                          </Typography>
                        </motion.div>
                      )}
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <DifferenceOutlinedIcon sx={{ fontSize: 32, color: pageAccent, mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Automated schema migrations.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Upgrade immutable data structures without losing historical records.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: `2px solid ${pageAccent}`, pl: 2, textAlign: 'justify' }}>
                    The biggest flaw of traditional blockchain architecture is that adding a new column to a database requires deploying an entirely new contract and manually migrating all old data. Cerulea handles this natively via transparent state proxies. You can add new fields to your entities in Studio, and the platform securely bridges your historical data into the upgraded schema instantly.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 5: Pre-Audited Templates */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <LibraryAddCheckOutlinedIcon sx={{ fontSize: 32, color: pageAccent, mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Pre-audited data templates.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Stop reinventing the wheel for standard Web3 primitives.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: `2px solid ${pageAccent}`, pl: 2, textAlign: 'justify' }}>
                    If you are building a system for Real World Assets, digital identity, or enterprise stablecoins, Cerulea provides pre-audited template models out of the box. These schemas are natively mapped to major interoperability standards like ERC-20 and W3C Credentials, ensuring immediate compatibility with global exchanges and external wallets.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>CERULEA STANDARD TEMPLATES</Typography>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: `${pageAccent}05`, border: `1px solid ${pageAccent}30`, borderRadius: 2 }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Real World Asset (RWA)</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: 0.5 }}>Fractional ownership & compliance freezes.</Typography>
                        </Box>
                        <Button 
                          onClick={() => handleDeployTemplate('rwa')}
                          size="small" 
                          variant="contained" 
                          sx={{ 
                            bgcolor: deployStates['rwa'] === 'Deployed ✓' ? '#10b981' : pageAccent, 
                            color: '#fff', 
                            minWidth: 100,
                            fontWeight: 700,
                            '&:hover': { bgcolor: deployStates['rwa'] === 'Deployed ✓' ? '#059669' : '#0e7490' } 
                          }}
                        >
                          {deployStates['rwa'] || 'Deploy'}
                        </Button>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Verifiable Credential</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: 0.5 }}>Mapped to W3C identity standards.</Typography>
                        </Box>
                        <Button 
                          onClick={() => handleDeployTemplate('w3c')}
                          size="small" 
                          variant="outlined" 
                          sx={{ 
                            color: deployStates['w3c'] ? (deployStates['w3c'] === 'Deployed ✓' ? '#10b981' : pageAccent) : 'text.primary', 
                            borderColor: deployStates['w3c'] ? (deployStates['w3c'] === 'Deployed ✓' ? '#10b981' : pageAccent) : 'divider',
                            minWidth: 100,
                            fontWeight: 700
                          }}
                        >
                          {deployStates['w3c'] || 'Deploy'}
                        </Button>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Fiat-Pegged Stablecoin</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: 0.5 }}>Mint/Burn mechanics and supply auditing.</Typography>
                        </Box>
                        <Button 
                          onClick={() => handleDeployTemplate('stablecoin')}
                          size="small" 
                          variant="outlined" 
                          sx={{ 
                            color: deployStates['stablecoin'] ? (deployStates['stablecoin'] === 'Deployed ✓' ? '#10b981' : pageAccent) : 'text.primary', 
                            borderColor: deployStates['stablecoin'] ? (deployStates['stablecoin'] === 'Deployed ✓' ? '#10b981' : pageAccent) : 'divider',
                            minWidth: 100,
                            fontWeight: 700
                          }}
                        >
                          {deployStates['stablecoin'] || 'Deploy'}
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 6: On-Chain Validation */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Input Validation Rule (Compiled)</Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                      <Box sx={{ mb: 3 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1, fontWeight: 800 }}>FIELD: customer_age</Typography>
                        <Box sx={{ p: 1.5, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#2563eb', fontFamily: 'monospace', fontWeight: 600 }}>REQUIRE (input.value {'>='} 18);</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1, fontWeight: 800 }}>LIVE INGESTION TEST</Typography>
                        <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid', borderColor: 'divider', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                          <Box sx={{ color: 'text.secondary' }}>POST /api/v1/user/create {'{ age: 16 }'}</Box>
                          <Box sx={{ color: '#dc2626', mt: 1, fontWeight: 600 }}>[ERROR] Protocol Rejection: Invalid Data.</Box>
                          <Box sx={{ color: '#dc2626' }}>Reason: Value does not meet minimum threshold logic.</Box>
                          <Box sx={{ color: 'text.secondary', mt: 2 }}>POST /api/v1/user/create {'{ age: 24 }'}</Box>
                          <Box sx={{ color: '#059669', mt: 1, fontWeight: 600 }}>[SUCCESS] Validated. State updated.</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <FlakyOutlinedIcon sx={{ fontSize: 32, color: pageAccent, mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    On-chain field validation.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Enforce strict data hygiene directly at the protocol level.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: `2px solid ${pageAccent}`, pl: 2, textAlign: 'justify' }}>
                    Do not rely on your web frontend to sanitize inputs. Cerulea allows you to bake strict logical parameters directly into your data model. If an API request attempts to write a negative value to a "Price" field, or register a user with an age below your legal threshold, the network deterministically reverts the transaction before it is ever written to the ledger.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}