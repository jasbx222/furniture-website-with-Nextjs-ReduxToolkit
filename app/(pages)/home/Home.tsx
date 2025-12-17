'use client';

import { Box, Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: "url('/image/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        width:"100%",
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {/* CARD */}
          <Box
            sx={{
              backgroundColor: '#FFF3E3',
              p: { xs: 4, md: 6 },
              borderRadius: 2,
              maxWidth: 520,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            }}
          >
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, fontWeight: 600 }}
            >
              New Arrival
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#B88E2F',
                mt: 1,
                mb: 2,
              }}
            >
              Discover Our <br />
              New Collection
            </Typography>

            <Typography
              sx={{
                color: '#555',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#B88E2F',
                px: 5,
                py: 1.5,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#a37d28',
                },
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
