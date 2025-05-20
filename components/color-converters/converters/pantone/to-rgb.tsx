'use client';

import { useRef, useState } from 'react';

import { PMS } from '@/config/colors';

import { convertPantoneToHex, getTextColor, hexToRgb, rgbToCmyk } from '@/lib/colors';
import { useIsMobile } from '@/lib/hooks/use-mobile';
import { useToast } from '@/lib/hooks/use-toast';

import { AddToHistoryButton } from '@/components/color-converters/shared/add-to-history-button';
import { ColorHistory } from '@/components/color-converters/shared/color-history';
import { ColorValueDisplay } from '@/components/color-converters/shared/color-value-display';
import { Container } from '@/components/container';
import { useColorHistoryContext } from '@/components/dynamic-converter';
import RelatedTools from '@/components/related-tools';
import { Card, CardContent } from '@/components/ui/card';
import { Wrapper } from '@/components/wrapper';

export default function PantoneRgbConverter() {
  const { toast } = useToast();
  const { colorHistory } = useColorHistoryContext();
  const previewRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const [pantone, setPantone] = useState(PMS[0]);

  const hex = `#${convertPantoneToHex(pantone)}`;
  const rgb = hexToRgb(hex);
  const cmyk = rgbToCmyk(rgb);
  const cmykString = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hexString = `${hex}`;

  const handleClick = (value: string) => {
    setPantone(value);

    if (isMobile && previewRef.current) {
      setTimeout(() => {
        const headerOffset = 70;
        const elementPosition = previewRef.current?.getBoundingClientRect().top;
        const offsetPosition = (elementPosition || 0) + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        description: `${label} copied!`,
        duration: 2000,
      });
    });
  };

  const addToHistory = () => {
    colorHistory.addToHistory({
      sourceColor: 'PANTONE',
      targetColor: 'RGB',
      sourceValue: pantone,
      targetValue: rgbString,
    });
  };

  const handleColorSelect = (sourceValue: string) => {
    setPantone(sourceValue);
  };

  return (
    <Wrapper size="lg">
      <Container>
        <div className="prose dark:prose-invert">
          <h1>Pantone to RGB Converter</h1>
          <p>
            Our free converter gives you instant RGB, CMYK, and HEX values for any Pantone color –
            no Pantone color chart needed. Just browse, click, and get precise color values for all
            your design needs.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent>
              <div className="flex flex-wrap gap-6">
                {PMS.map((pantoneColor) => {
                  const hex = convertPantoneToHex(pantoneColor);

                  return (
                    <div
                      key={pantoneColor}
                      className="block size-14 shrink-0 cursor-pointer rounded-md"
                      style={{ backgroundColor: `#${hex}` }}
                      onClick={() => handleClick(pantoneColor)}></div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div ref={previewRef}>
            <div className="sticky top-[70px]">
              <Card className="min-h-[300px]">
                <CardContent>
                  <div className="mb-4">
                    <h2 className="mb-2 text-xl font-semibold">Color Preview</h2>
                    <div
                      className="flex h-24 w-full items-center justify-center rounded-lg"
                      style={{ backgroundColor: hex, color: getTextColor(hex) }}>
                      <div className="text-center text-base font-medium">{pantone}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <ColorValueDisplay label="RGB" value={rgbString} onCopy={copyToClipboard} />
                    <ColorValueDisplay label="CMYK" value={cmykString} onCopy={copyToClipboard} />
                    <ColorValueDisplay label="HEX" value={hexString} onCopy={copyToClipboard} />

                    <AddToHistoryButton
                      onClick={addToHistory}
                      disabled={colorHistory.items.length >= 5}
                    />

                    <ColorHistory history={colorHistory} onColorSelect={handleColorSelect} />
                  </div>
                </CardContent>
              </Card>

              <div className="my-4">
                <iframe
                  width="100%"
                  height="250"
                  frameBorder="0"
                  className="ta-widget"
                  data-min-height="250"
                  id="682c9ba20aa965b6c299b272-2929"
                  src="https://app.tinyadz.com/widgets/682c9ba20aa965b6c299b272?seed=2929&previewMode=false&showInPopup=false&theme=light"></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col items-start gap-4 py-8 md:flex-row md:items-start">
        <RelatedTools />
      </Container>
    </Wrapper>
  );
}
