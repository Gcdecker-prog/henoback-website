'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ChapterCtas } from '@/components/marketing/ChapterCtas';
import { ChapterHeadline, chapterBodyClass } from '@/components/marketing/ChapterHeadline';
import { MaturitySnapshotVisual } from '@/components/marketing/MaturitySnapshotVisual';
import { ProductInset, ProductShell } from '@/components/marketing/ProductShell';
import { WaveField } from '@/components/marketing/WaveField';
import { getStartedPage } from '@/lib/content/get-started-page';
import { assessmentUrl } from '@/lib/gtm-links';
import { headerCta } from '@/lib/site-config';
import { motionEase, staggerContainer, staggerItem } from '@/lib/motion/variants';
import { cn } from '@/lib/cn';

const CTA_HREF = assessmentUrl({ content: 'get-started-hero' });

/** Conversion chapter — same hero voice as home, visual in a product tray. */
export function GetStartedHero() {
  const reduce = useReducedMotion();
  const { kicker, headline, underGraphic } = getStartedPage;

  return (
    <section className="relative isolate bg-white pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
      <WaveField />

      <Container className="relative">
        <motion.div
          className="max-w-4xl"
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <ChapterHeadline kicker={kicker} headline={headline} />
          </motion.div>
          <motion.p
            className={cn('mt-7', chapterBodyClass)}
            variants={staggerItem}
          >
            {underGraphic}
          </motion.p>
          <motion.div variants={staggerItem}>
            <ChapterCtas
              primary={{ href: CTA_HREF, label: headerCta.label }}
              secondary={{ href: '/services', label: 'See how it works' }}
              className="mt-9"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: motionEase }}
        >
          <ProductShell>
            <ProductInset>
              <MaturitySnapshotVisual />
            </ProductInset>
          </ProductShell>
        </motion.div>
      </Container>
    </section>
  );
}
