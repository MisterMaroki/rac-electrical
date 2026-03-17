import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LocalBusinessSchema } from "@/components/structured-data";
import { QuoteFormProvider } from "@/components/quote-form-context";
import { QuoteFormOverlay } from "@/components/quote-form-overlay";
import { EmergencyBanner } from "@/components/emergency-banner";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuoteFormProvider>
      <LocalBusinessSchema />
      <EmergencyBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <QuoteFormOverlay />
      <FloatingWhatsApp />
    </QuoteFormProvider>
  );
}
