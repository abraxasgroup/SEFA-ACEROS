'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import { Box, Heading, Text, Button, Link as GSLink, VStack, HStack } from '@gluestack-ui/themed';
import Link from 'next/link';

export default function Home() {
  return (
    <Box>
      <Navbar />

      {/* HERO */}
      <Box position="relative" minHeight={720} display="grid" alignItems="flex-end" overflow="hidden">
        <video
          autoPlay muted loop playsInline
          poster="/assets/yard_op_2.jpg"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.65) saturate(1.05)' }}
          >
          <source src="/assets/drone-hero.webm" type="video/webm" />
          <source src="/assets/drone-hero.mp4" type="video/mp4" />
        </video>
        <Box position="relative" zIndex={2} py="$20" sx={{
          background:'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.45) 45%, rgba(0,0,0,.65))'
        }}>
          <Box className="container">
            <HStack flexWrap="wrap" gap="$2" mb="$2">
              <Box px="$3" py="$1" borderRadius="$full" sx={{ background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.12)' }}>
                <Text fontWeight="$bold">Más de 35 años en el mercado argentino</Text>
              </Box>
              <Box px="$3" py="$1" borderRadius="$full" sx={{ background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.12)' }}>
                <Text fontWeight="$bold">Respuesta ágil • Calidad certificada</Text>
              </Box>
            </HStack>

            <Heading size="3xl" mb="$2">Acero que mueve industrias.</Heading>
            <Text size="lg" sx={{ color:'#cfe4ff' }} maxWidth={960}>
              Caños y tubos con y sin costura, accesorios certificados y recuperados, chapas gruesas.
              Desmontaje y demolición industrial con disposición final certificada, chatarra, astilleros, grúas e hidrogrúas.
            </Text>
            <HStack mt="$4" gap="$3" flexWrap="wrap">
              <Button size="lg" action="positive" asChild>
                <Link href="#contacto">Cotizar ahora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#segmento2">Ver servicios</Link>
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>

      {/* SEGMENTO 1 */}
      <Box id="segmento1" py="$12">
        <Box className="container">
          <Heading size="xl" mb="$2">Segmento 1 — Productos</Heading>
          <Text mb="$6" sx={{ color:'#cfe4ff' }}>Caños y tubos con y sin costura, accesorios para tuberías certificados y recuperados, y chapas gruesas.</Text>
          <Box display="grid" sx={{ gridTemplateColumns:'repeat(3,1fr)', gap:'18px' }}>
            {[
              { title:'Caños y tubos industriales', items:[
                'Diámetros: ⌀½” a ⌀48”. Espesores a requerimiento.',
                'Normas: API 5L, ASTM A106/A53, ASTM A333.',
                'Grados: B, X42–X70, usos estructurales y conducciones.',
                'Acabados: negro, galvanizado, revestido, recubierto.'
              ]},
              { title:'Accesorios certificados', items:[
                'Bridas: WN, SO, BL, TH, LAP • ANSI/ASME, DIN.',
                'Fittings: codos 45°/90°, tees, reductores, tapas.',
                'Materiales: carbono, inoxidable, aleaciones.',
                'Trazabilidad y certificación completa.'
              ]},
              { title:'Chapas gruesas', items:[
                'Calidades: ASTM A36, A572, antiabrasivas.',
                'Formatos a medida y cortes CNC.',
                'Certificación bajo norma y ensayo.',
                'Nuevas y recuperadas.'
              ]}
            ].map((card, idx)=>(
              <Box key={idx} bg="white" borderRadius={14} p="$4" sx={{ color:'#0f172a', border:'1px solid #e6eef6', boxShadow:'0 10px 24px rgba(2,6,23,.1), 0 2px 6px rgba(2,6,23,.06)' }}>
                <Heading size="lg" mb="$2" sx={{ color:'#0b1b2b' }}>{card.title}</Heading>
                <ul style={{ marginTop:10, paddingLeft:18 }}>
                  {card.items.map((li,i)=>(<li key={i} style={{ margin:'8px 0' }}>{li}</li>))}
                </ul>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* SEGMENTO 2 */}
      <Box id="segmento2" py="$12">
        <Box className="container">
          <Heading size="xl" mb="$2">Segmento 2 — Servicios</Heading>
          <Text mb="$6" sx={{ color:'#cfe4ff' }}>Desmontaje y demolición industrial con <b>certificado de disposición final</b>. Gestión de chatarra y operaciones en astilleros. Servicio de <b>grúas e hidrogrúas</b>.</Text>
          <Box display="grid" sx={{ gridTemplateColumns:'1.1fr .9fr', gap:'18px' }}>
            {[
              { title:'Desmontaje & Demolición Industrial', items:[
                'Planificación técnica, ingeniería de métodos y seguridad.',
                'Corte, izaje y retiro de estructuras, tanques y líneas.',
                'Gestión integral de residuos y chatarra.',
                'Documentación y disposición final certificada.'
              ]},
              { title:'Chatarra • Astilleros • Grúas', items:[
                'Compra/venta y logística de chatarra ferrosa.',
                'Operaciones en muelles y astilleros.',
                'Servicio de grúa e hidrogrúas 🏗️',
                'Equipos habilitados y personal calificado.'
              ]}
            ].map((card, idx)=>(
              <Box key={idx} bg="white" borderRadius={14} p="$4" sx={{ color:'#0f172a', border:'1px solid #e6eef6', boxShadow:'0 10px 24px rgba(2,6,23,.1), 0 2px 6px rgba(2,6,23,.06)' }}>
                <Heading size="lg" mb="$2" sx={{ color:'#0b1b2b' }}>{card.title}</Heading>
                <ul style={{ marginTop:10, paddingLeft:18 }}>
                  {card.items.map((li,i)=>(<li key={i} style={{ margin:'8px 0' }}>{li}</li>))}
                </ul>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* GALERIA */}
      <Gallery />

      {/* CONTACTO */}
      <Box id="contacto" py="$12" sx={{ borderTop:'1px solid rgba(255,255,255,.07)' }}>
        <Box className="container">
          <Heading size="xl" mb="$2">Contacto</Heading>
          <Text mb="$6" sx={{ color:'#cfe4ff' }}>Cotizá tu necesidad hoy mismo. Respuesta ágil por WhatsApp o correo.</Text>
          <Box display="grid" sx={{ gridTemplateColumns:'1fr 1fr', gap:'18px' }}>
            <Box bg="white" borderRadius={14} p="$4" sx={{ color:'#0f172a', border:'1px solid #e6eef6', boxShadow:'0 10px 24px rgba(2,6,23,.1), 0 2px 6px rgba(2,6,23,.06)' }}>
              <Heading size="lg" mb="$2" sx={{ color:'#0b1b2b' }}>Datos</Heading>
              <Text>
                Tel: <GSLink href="tel:+5490000000000">+54 9 0000 0000</GSLink><br/>
                Email: <GSLink href="mailto:contacto@sefaaceros.com">contacto@sefaaceros.com</GSLink><br/>
                Ubicación: Argentina — Cobertura nacional
              </Text>
              <Button mt="$3" asChild action="positive"><a href="https://wa.me/5490000000000?text=Hola%20SEFA%20ACEROS%2C%20quisiera%20cotizar" target="_blank">WhatsApp</a></Button>
            </Box>
            <Box bg="white" borderRadius={14} p="$4" sx={{ color:'#0f172a', border:'1px solid #e6eef6', boxShadow:'0 10px 24px rgba(2,6,23,.1), 0 2px 6px rgba(2,6,23,.06)' }}>
              <Heading size="lg" mb="$2" sx={{ color:'#0b1b2b' }}>Consulta rápida</Heading>
              <form onSubmit={(e)=>{
                e.preventDefault();
                const msg = (document.getElementById('msg') as HTMLTextAreaElement)?.value || '';
                window.location.href = 'mailto:contacto@sefaaceros.com?subject=Consulta%20SEFA%20ACEROS&body=' + encodeURIComponent(msg);
              }}>
                <label htmlFor="msg" style={{opacity:.8}}>Contanos qué necesitás:</label><br/>
                <textarea id="msg" rows={6} style={{ width:'100%', border:'1px solid #e6eef6', borderRadius:12, padding:12, marginTop:8 }} />
                <div style={{ display:'flex', gap:10, marginTop:10 }}>
                  <button type="submit" style={{ padding:'10px 14px', borderRadius:12, fontWeight:800 }}>Enviar</button>
                </div>
              </form>
            </Box>
          </Box>
          <Text mt="$2" sx={{ color:'#c7d7ea' }}>*Reemplazar teléfono y correo por los definitivos.</Text>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
