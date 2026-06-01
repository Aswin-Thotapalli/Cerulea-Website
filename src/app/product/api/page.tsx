'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const LINKS = {
  docs: '/developers/docs',
  dashboard: 'https://dashboard.cerulea.io',
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

export default function CeruleaApiPageLight() {
  // Interactive state for Code Snippets
  const [activeLang, setActiveLang] = React.useState('cURL');
  
  // Interactive state for Time Travel Query
  const [blockTarget, setBlockTarget] = React.useState('LATEST');
  const [isQuerying, setIsQuerying] = React.useState(false);

  const handleTimeTravel = (target: string) => {
    if (isQuerying) return;
    setIsQuerying(true);
    setTimeout(() => {
      setBlockTarget(target);
      setIsQuerying(false);
    }, 600);
  };

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        {/* Vibrant Rose Glow for API / Networking */}
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(244, 63, 94, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography sx={{ color: '#f43f5e', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Cerulea API Gateway
            </Typography>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, maxWidth: 1000, color: '#172554' }}>
              Web2 ergonomics.<br />
              <span style={{ color: '#64748B' }}>Web3 architecture.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 750, lineHeight: 1.5, mb: 6, fontWeight: 400, textAlign: 'justify' }}>
              Connect your legacy applications to the blockchain instantly. The Cerulea API Gateway completely abstracts away JSON-RPC complexities, cryptographic signing, and node management into clean, highly scalable REST endpoints and event webhooks.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#f43f5e', color: '#ffffff', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(244, 63, 94, 0.3)',
                  '&:hover': { bgcolor: '#e11d48', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(244, 63, 94, 0.4)' },
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
                  borderColor: '#CBD5E1', color: '#172554', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { borderColor: '#94A3B8', bgcolor: 'rgba(0,0,0,0.02)' }
                }}
              >
                View API Documentation
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Container maxWidth="lg" sx={{ mb: 16 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          
          {/* Feature 1: Auto-Generated REST */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <ApiOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Auto-generated REST endpoints.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Mutate blockchain state using standard HTTP protocols.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Your backend developers do not need to learn specialized Web3 libraries like ethers.js or handle raw RPC calls. When you finalize a schema in Cerulea Studio, the API Gateway immediately generates standard POST, GET, PUT, and DELETE routes. You can interact with complex smart contracts exactly like you would a traditional database.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 2, py: 1.5, bgcolor: '#F8FAFC', display: 'flex', gap: 2 }}>
                    <Typography 
                      onClick={() => setActiveLang('cURL')} 
                      sx={{ fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', color: activeLang === 'cURL' ? '#f43f5e' : '#94A3B8' }}
                    >
                      cURL
                    </Typography>
                    <Typography 
                      onClick={() => setActiveLang('Node.js')} 
                      sx={{ fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', color: activeLang === 'Node.js' ? '#f43f5e' : '#94A3B8' }}
                    >
                      Node.js
                    </Typography>
                    <Typography 
                      onClick={() => setActiveLang('Python')} 
                      sx={{ fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', color: activeLang === 'Python' ? '#f43f5e' : '#94A3B8' }}
                    >
                      Python
                    </Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.8rem', color: '#334155', lineHeight: 1.6, minHeight: 200, bgcolor: '#F8FAFC' }}>
                    {activeLang === 'cURL' && (
                      <Box>
                        <Box sx={{ color: '#2563eb', fontWeight: 700 }}>curl -X POST \</Box>
                        <Box sx={{ pl: 2, color: '#059669' }}>https://api.cerulea.net/v1/projects/asset/transfer \</Box>
                        <Box sx={{ pl: 2, color: '#64748B' }}>-H 'Authorization: Bearer CER_LIVE_99a8b...' \</Box>
                        <Box sx={{ pl: 2, color: '#64748B' }}>-H 'Content-Type: application/json' \</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>-d '{'{'}</Box>
                        <Box sx={{ pl: 4, color: '#172554' }}>"asset_id": <span style={{ color: '#d97706' }}>"TOKEN_4491"</span>,</Box>
                        <Box sx={{ pl: 4, color: '#172554' }}>"recipient": <span style={{ color: '#d97706' }}>"0x892A...1B99"</span>,</Box>
                        <Box sx={{ pl: 4, color: '#172554' }}>"amount": <span style={{ color: '#f43f5e' }}>500</span></Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>{'}'}'</Box>
                      </Box>
                    )}
                    {activeLang === 'Node.js' && (
                      <Box>
                        <Box sx={{ color: '#2563eb', fontWeight: 700 }}>const response = await fetch(<span style={{ color: '#059669' }}>'https://api.cerulea.net/v1/projects/asset/transfer'</span>, {'{'}</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>method: <span style={{ color: '#d97706' }}>'POST'</span>,</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>headers: {'{'}</Box>
                        <Box sx={{ pl: 4, color: '#64748B' }}>'Authorization': 'Bearer CER_LIVE_99a8b...',</Box>
                        <Box sx={{ pl: 4, color: '#64748B' }}>'Content-Type': 'application/json'</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>{'}'},</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>body: JSON.stringify({'{'}</Box>
                        <Box sx={{ pl: 4, color: '#172554' }}>asset_id: <span style={{ color: '#d97706' }}>"TOKEN_4491"</span>,</Box>
                        <Box sx={{ pl: 4, color: '#172554' }}>recipient: <span style={{ color: '#d97706' }}>"0x892A...1B99"</span>,</Box>
                        <Box sx={{ pl: 4, color: '#172554' }}>amount: <span style={{ color: '#f43f5e' }}>500</span></Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>{'}'})</Box>
                        <Box sx={{ color: '#2563eb', fontWeight: 700 }}>{'}'});</Box>
                      </Box>
                    )}
                    {activeLang === 'Python' && (
                      <Box>
                        <Box sx={{ color: '#2563eb', fontWeight: 700 }}>import requests</Box>
                        <Box sx={{ color: '#172554', mt: 1 }}>headers = {'{'}</Box>
                        <Box sx={{ pl: 2, color: '#64748B' }}>'Authorization': 'Bearer CER_LIVE_99a8b...',</Box>
                        <Box sx={{ pl: 2, color: '#64748B' }}>'Content-Type': 'application/json'</Box>
                        <Box sx={{ color: '#172554' }}>{'}'}</Box>
                        <Box sx={{ color: '#172554', mt: 1 }}>payload = {'{'}</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>"asset_id": <span style={{ color: '#d97706' }}>"TOKEN_4491"</span>,</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>"recipient": <span style={{ color: '#d97706' }}>"0x892A...1B99"</span>,</Box>
                        <Box sx={{ pl: 2, color: '#172554' }}>"amount": <span style={{ color: '#f43f5e' }}>500</span></Box>
                        <Box sx={{ color: '#172554' }}>{'}'}</Box>
                        <Box sx={{ color: '#172554', mt: 1 }}>response = requests.post(<span style={{ color: '#059669' }}>'https://api.cerulea.net/v1/projects/asset/transfer'</span>, json=payload, headers=headers)</Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 2: Idempotent Request Safety */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Idempotency Guard Logic</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.8rem', color: '#172554', lineHeight: 1.8, bgcolor: '#F8FAFC' }}>
                    <Box sx={{ color: '#64748B' }}>// Client Request 1 (Timeout Occurs)</Box>
                    <Box sx={{ color: '#2563eb', fontWeight: 700 }}>POST /v1/treasury/disburse</Box>
                    <Box sx={{ pl: 2, color: '#64748B' }}>Header: Idempotency-Key: "req_99b2x"</Box>
                    <Box sx={{ color: '#059669', mt: 1 }}>[SYS] Execution successful. Transaction confirmed.</Box>
                    <Box sx={{ color: '#dc2626' }}>[ERR] Client disconnected before receiving 200 OK.</Box>
                    
                    <Box sx={{ color: '#64748B', mt: 3 }}>// Client Request 2 (Automated Retry)</Box>
                    <Box sx={{ color: '#2563eb', fontWeight: 700 }}>POST /v1/treasury/disburse</Box>
                    <Box sx={{ pl: 2, color: '#64748B' }}>Header: Idempotency-Key: "req_99b2x"</Box>
                    <Box sx={{ color: '#d97706', mt: 1 }}>[GUARD] Duplicate key detected. Bypassing execution.</Box>
                    <Box sx={{ color: '#059669' }}>[SYS] Returning cached success response.</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <GppGoodOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Idempotent request safety.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Never worry about accidental double-spending during network timeouts.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  In enterprise financial systems, network blips happen. If your server sends a transfer request but loses connection before receiving a response, retrying the request blindly could result in duplicate transfers. The Cerulea API enforces strict Idempotency Keys in your request headers. You can safely retry timed-out requests knowing the API will return the cached response rather than duplicating the transaction.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 3: Transaction Simulation */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <BugReportOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Transaction dry runs.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Preview exactly what a transaction will do before committing it.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Blindly broadcasting complex transactions to a ledger is dangerous. The Cerulea API provides a dedicated Simulation Endpoint. By sending your payload with the `?simulate=true` parameter, the API runs the execution logic against the live network state without committing the data. You receive an exact report of gas estimates, expected state changes, and any potential revert errors before spending a dime.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>API Route: /v1/action?simulate=true</Typography>
                    <Box sx={{ px: 1.5, py: 0.25, borderRadius: 1, border: '1px solid rgba(244, 63, 94, 0.3)', bgcolor: 'rgba(244, 63, 94, 0.1)' }}>
                      <Typography sx={{ fontSize: '0.7rem', color: '#f43f5e', fontWeight: 800 }}>READ ONLY</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.8rem', color: '#172554', lineHeight: 1.8, bgcolor: '#F8FAFC' }}>
                    <Box>{'{'}</Box>
                    <Box sx={{ pl: 2 }}>"simulation_status": <span style={{ color: '#059669', fontWeight: 700 }}>"SUCCESS_EXPECTED"</span>,</Box>
                    <Box sx={{ pl: 2 }}>"estimated_gas_cost": <span style={{ color: '#d97706' }}>"0.0042 USD"</span>,</Box>
                    <Box sx={{ pl: 2 }}>"state_mutations": [</Box>
                    <Box sx={{ pl: 4 }}>{'{'}</Box>
                    <Box sx={{ pl: 6 }}>"entity": <span style={{ color: '#2563eb' }}>"Treasury_Vault"</span>,</Box>
                    <Box sx={{ pl: 6 }}>"previous_value": <span style={{ color: '#dc2626' }}>10000</span>,</Box>
                    <Box sx={{ pl: 6 }}>"new_value": <span style={{ color: '#059669' }}>9500</span></Box>
                    <Box sx={{ pl: 4 }}>{'}'}</Box>
                    <Box sx={{ pl: 2 }}>]</Box>
                    <Box>{'}'}</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 4: High-Throughput Batching */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>BULK EXECUTION PAYLOAD</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    <Box sx={{ flex: 1, p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#f43f5e', mb: 1, fontWeight: 800 }}>ARRAY (Length: 5,000)</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontFamily: 'monospace' }}>[</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569', fontFamily: 'monospace', pl: 2 }}>{'{'} user: "0x1A", amt: 50 {'}'},</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569', fontFamily: 'monospace', pl: 2 }}>{'{'} user: "0x2B", amt: 50 {'}'},</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94A3B8', fontFamily: 'monospace', pl: 2 }}>... 4,998 more records</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontFamily: 'monospace' }}>]</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
                      <ArrowForwardIcon sx={{ color: '#f43f5e' }} />
                    </Box>
                    <Box sx={{ flex: 1, p: 2, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 2 }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#059669', mb: 1, fontWeight: 800 }}>NETWORK RESULT</Typography>
                      <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 700 }}>1 Single Transaction</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#475569', mt: 1 }}>Gas fees optimized by 94% via atomic batching.</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <LayersOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  High-throughput batching.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Execute thousands of operations in a single atomic API call.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Processing enterprise payroll or minting digital items for a massive user base requires efficiency. Sending thousands of individual API calls risks rate limits and massive network fee bloat. The Cerulea Bulk Endpoint allows you to submit JSON arrays of operations. The API compiles them into a single, highly compressed atomic transaction, executing the entire batch simultaneously.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 5: Event-Driven Webhooks */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <WebhookOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Event-driven webhooks.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Stop polling the blockchain. The network pushes data to you instantly.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Running a cron job every five seconds to check if a block contains your transaction is severely outdated. The Cerulea API Gateway allows you to register secure webhooks via the Dashboard. When a specific smart contract event fires on the ledger, the Gateway immediately dispatches a JSON payload to your designated Web2 server, keeping your legacy ERP or CRM perfectly synchronized in real time.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>EVENT ROUTING PROTOCOL</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    {/* On Chain Event */}
                    <Box sx={{ p: 2, px: 4, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 2, mb: 2, width: '100%', textAlign: 'center' }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 800, mb: 0.5 }}>CERULEA L1 EVENT EMITTED</Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Invoice_Settled (ID: 9942)</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 1 }}>
                      <Box sx={{ width: 2, height: 15, bgcolor: '#f43f5e' }} />
                      <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: '#f43f5e', color: '#fff', fontSize: '0.65rem', fontWeight: 800 }}>HTTPS POST DELIVERED</Box>
                      <Box sx={{ width: 2, height: 15, bgcolor: '#f43f5e' }} />
                      <ArrowForwardIcon sx={{ transform: 'rotate(90deg)', color: '#f43f5e', mt: -1 }} />
                    </Box>

                    {/* Enterprise Backend */}
                    <Box sx={{ p: 2, px: 4, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2, mt: 2, width: '100%', textAlign: 'center' }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, mb: 0.5 }}>TARGET: ENTERPRISE SAP SYSTEM</Typography>
                      <Typography sx={{ fontSize: '0.85rem', color: '#2563eb', fontFamily: 'monospace' }}>https://internal.corp.net/webhooks/cerulea</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#059669', mt: 1, fontWeight: 600 }}>Response: 200 OK (Invoice marked paid in ERP)</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 6: Invisible Wallet Provisioning */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>API Route: /v1/auth/provision-wallet</Typography>
                  </Box>
                  <Box sx={{ p: 4, bgcolor: '#FFFFFF' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Box sx={{ flex: 1, p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800 }}>WEB2 IDENTITY</Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 600 }}>user@corporate.com</Typography>
                      </Box>
                      <ArrowForwardIcon sx={{ color: '#f43f5e' }} />
                      <Box sx={{ flex: 1, p: 2, bgcolor: 'rgba(244, 63, 94, 0.05)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: 2 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#f43f5e', mb: 1, fontWeight: 800 }}>SECURE ENCLAVE</Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontFamily: 'monospace', fontWeight: 600 }}>Keypair Generated</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 700 }}>API RESPONSE DATA</Typography>
                      <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontFamily: 'monospace', fontWeight: 600 }}>"address": "0x4F9...A1B2"</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#475569', mt: 1 }}>User experience is identical to a standard login.</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <ContactlessOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Invisible wallet provisioning.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Onboard users with just an email address. No browser extensions required.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Enterprise adoption fails when users are forced to manage cryptographic seed phrases. The Cerulea API provides Wallet-as-a-Service (WaaS) endpoints. When a user creates an account on your traditional web app using OAuth or email, the API securely provisions a non-custodial blockchain wallet in the background, fully bridging Web2 authentication with Web3 security.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 7: Gasless Transaction Relayer */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <LocalGasStationOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Gasless transaction relayer.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Provide frictionless user experiences by sponsoring execution fees automatically.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Forcing your customers to buy cryptocurrency just to interact with your decentralized application creates massive friction. The Cerulea API features a native Meta-Transaction Relayer. Your application passes a user's signed intent to our API. Cerulea wraps it, pays the underlying network execution fee from your corporate fiat account, and executes the transaction on the user's behalf.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>API Route: /v1/relay/execute</Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 0.5, fontWeight: 800 }}>USER INTENT</Typography>
                          <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontFamily: 'monospace' }}>Function: mint_certificate()</Typography>
                          <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontFamily: 'monospace' }}>Client Signature: <span style={{ color: '#2563eb' }}>0x7c9b...valid</span></Typography>
                        </Box>
                      </Grid>
                     <Grid size={{ xs: 12 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', my: -1 }}>
                          <Box sx={{ px: 2, py: 0.5, bgcolor: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: 4, color: '#f43f5e', fontSize: '0.75rem', fontWeight: 800, zIndex: 2 }}>
                            WRAPPED BY RELAYER
                          </Box>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Box sx={{ p: 2, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#059669', mb: 0.5, fontWeight: 800 }}>ON-CHAIN EXECUTION</Typography>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontFamily: 'monospace' }}>Gas Paid By: Cerulea_Treasury</Typography>
                            <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>SUCCESS</Typography>
                          </Box>
                          <Typography sx={{ fontSize: '0.75rem', color: '#475569', mt: 1 }}>User experience: 0 friction. 0 network tokens required.</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 8: Oracle Data Ingestion */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>API Route: /v1/oracle/submit-feed</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#f43f5e', fontFamily: 'monospace', fontWeight: 700 }}>SECURE INGESTION</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.8rem', color: '#172554', lineHeight: 2, bgcolor: '#F8FAFC' }}>
                    <Box sx={{ color: '#64748B' }}>// Incoming payload from authorized financial API</Box>
                    <Box>{'{'}</Box>
                    <Box sx={{ pl: 2 }}>"feed_id": <span style={{ color: '#d97706' }}>"USD_EUR_RATE"</span>,</Box>
                    <Box sx={{ pl: 2 }}>"value": <span style={{ color: '#d97706' }}>"0.9142"</span>,</Box>
                    <Box sx={{ pl: 2 }}>"timestamp": <span style={{ color: '#f43f5e' }}>1718223491</span>,</Box>
                    <Box sx={{ pl: 2 }}>"oracle_signature": <span style={{ color: '#2563eb' }}>"0x44A...F219"</span></Box>
                    <Box>{'}'}</Box>
                    <Divider sx={{ borderColor: '#E2E8F0', my: 2 }} />
                    <Box sx={{ color: '#059669', fontWeight: 600 }}>[AUTH] Oracle Signature Verified.</Box>
                    <Box sx={{ color: '#2563eb', fontWeight: 600 }}>[SYS] State Updated. Dependent contracts triggered.</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <SensorOccupiedOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Oracle data ingestion.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Bridge real-world APIs securely into your isolated blockchain state.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Smart contracts are blind to the outside world. If your logic requires real-time stock prices, weather data, or IoT sensor readings, you need an Oracle. The Cerulea API Gateway provides highly restricted ingestion endpoints, allowing your authorized external systems to push cryptographic, tamper-evident data feeds directly into the network state.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 9: Time-Travel Queries (Interactive) */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <HistoryOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Time-travel queries.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Fetch the exact state of your network at any point in history.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  Standard databases overwrite previous records. Blockchains append them. The Cerulea API Gateway exposes a powerful block height parameter in every REST query. You can instantly fetch an entity's exact configuration, balance, or ownership status exactly as it existed six months ago, making financial audits and data provenance checks completely trivial.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, letterSpacing: '0.05em' }}>HISTORICAL STATE QUERY</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        onClick={() => handleTimeTravel('LATEST')}
                        size="small" 
                        variant={blockTarget === 'LATEST' ? 'contained' : 'outlined'}
                        sx={{ 
                          bgcolor: blockTarget === 'LATEST' ? '#172554' : 'transparent',
                          color: blockTarget === 'LATEST' ? '#FFFFFF' : '#475569', 
                          borderColor: blockTarget === 'LATEST' ? '#172554' : '#CBD5E1',
                          '&:hover': { bgcolor: blockTarget === 'LATEST' ? '#1E2B4D' : '#F1F5F9' }
                        }}
                      >
                        Latest Block
                      </Button>
                      <Button 
                        onClick={() => handleTimeTravel('14500')}
                        size="small" 
                        variant={blockTarget === '14500' ? 'contained' : 'outlined'}
                        sx={{ 
                          bgcolor: blockTarget === '14500' ? '#f43f5e' : 'transparent',
                          color: blockTarget === '14500' ? '#FFFFFF' : '#475569', 
                          borderColor: blockTarget === '14500' ? '#f43f5e' : '#CBD5E1',
                          '&:hover': { bgcolor: blockTarget === '14500' ? '#e11d48' : '#F1F5F9' }
                        }}
                      >
                        Block #14,500
                      </Button>
                    </Box>
                  </Box>
                  
                  <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0', fontFamily: 'monospace', fontSize: '0.8rem', minHeight: 120 }}>
                    {isQuerying ? (
                      <Typography sx={{ color: '#64748B' }}>Querying archival nodes...</Typography>
                    ) : (
                      <>
                        <Box sx={{ color: '#2563eb', fontWeight: 700 }}>GET /api/v1/wallet/0x3A9/balance?block={blockTarget}</Box>
                        {blockTarget === 'LATEST' ? (
                          <Box sx={{ mt: 2 }}>
                            <Box sx={{ color: '#172554' }}>"timestamp": <span style={{ color: '#f43f5e' }}>"2026-02-25T14:02:11Z"</span></Box>
                            <Box sx={{ color: '#172554' }}>"balance": <span style={{ color: '#059669', fontWeight: 700 }}>"4,500.00 USDC"</span></Box>
                            <Box sx={{ color: '#172554' }}>"status": <span style={{ color: '#2563eb' }}>"Active"</span></Box>
                          </Box>
                        ) : (
                          <Box sx={{ mt: 2 }}>
                            <Box sx={{ color: '#172554' }}>"timestamp": <span style={{ color: '#f43f5e' }}>"2025-08-12T09:14:00Z"</span></Box>
                            <Box sx={{ color: '#172554' }}>"balance": <span style={{ color: '#dc2626', fontWeight: 700 }}>"0.00 USDC"</span></Box>
                            <Box sx={{ color: '#172554' }}>"status": <span style={{ color: '#64748B' }}>"Account created. No deposits."</span></Box>
                          </Box>
                        )}
                      </>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 10: WebSockets */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Active Socket: wss://stream.cerulea.net</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                      <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 800 }}>CONNECTED</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.75rem', color: '#172554', lineHeight: 2, maxHeight: 200, overflow: 'hidden', bgcolor: '#F8FAFC' }}>
                    <Box sx={{ color: '#64748B' }}>{'>'} Subscribing to topic: "contract_events"</Box>
                    <Box>{'<'} <span style={{ color: '#2563eb', fontWeight: 600 }}>[STREAM]</span> {`{"event": "Trade_Executed", "price": 420.50, "ms": 12}`}</Box>
                    <Box>{'<'} <span style={{ color: '#2563eb', fontWeight: 600 }}>[STREAM]</span> {`{"event": "Trade_Executed", "price": 420.55, "ms": 14}`}</Box>
                    <Box>{'<'} <span style={{ color: '#f43f5e', fontWeight: 600 }}>[STREAM]</span> {`{"event": "Order_Cancelled", "price": 421.00, "ms": 19}`}</Box>
                    <Box>{'<'} <span style={{ color: '#2563eb', fontWeight: 600 }}>[STREAM]</span> {`{"event": "Trade_Executed", "price": 420.45, "ms": 22}`}</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <CableOutlinedIcon sx={{ fontSize: 32, color: '#f43f5e', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  High-frequency WebSockets.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Sub-millisecond data streaming for high-performance applications.
                </Typography>
                <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f43f5e', pl: 2, textAlign: 'justify' }}>
                  While REST API endpoints are perfect for standard enterprise integrations, decentralized finance (DeFi) trading interfaces and multiplayer gaming environments require raw, uninterrupted data streams. Cerulea provides dedicated WSS (WebSocket) endpoints capable of pushing tens of thousands of state updates per second directly to your client applications.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}