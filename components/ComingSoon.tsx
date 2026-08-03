import { SiteHeader } from "@/components/SiteHeader";
import { ButtonLink } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Sticker } from "@/components/primitives/Sticker";
import type { ComingSoonPage } from "@/content/comingSoon";

/**
 * The holding state for pages whose backend isn't built yet. Deliberately
 * reads as a commitment with a date attached rather than an empty screen —
 * these URLs are linked from the landing page and the manifesto.
 */
export function ComingSoon({ page }: { page: ComingSoonPage }) {
  return (
    <>
      <SiteHeader />
      <main>
        <Section
          kicker={page.kicker}
          headline={page.headline}
          subline={page.subline}
        >
          <Reveal>
            <Sticker accent="lime" className="max-w-2xl">
              <p className="text-body text-white">{page.promise}</p>
            </Sticker>
          </Reveal>

          <Reveal index={1} className="mt-10">
            <ButtonLink href={page.cta.href} variant="outline">
              {page.cta.label}
            </ButtonLink>
          </Reveal>
        </Section>
      </main>
    </>
  );
}
