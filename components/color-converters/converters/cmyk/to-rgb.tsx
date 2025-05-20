'use client';

import { useState } from 'react';

import { cmykToRgb, rgbToHex } from '@/lib/colors';
import { useToast } from '@/lib/hooks/use-toast';

import { ColorHistory } from '@/components/color-converters/shared/color-history';
import { Container } from '@/components/container';
import { useColorHistoryContext } from '@/components/dynamic-converter';
import RelatedTools from '@/components/related-tools';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Wrapper } from '@/components/wrapper';

import { AddToHistoryButton } from '../../shared/add-to-history-button';
import { ColorPreview } from '../../shared/color-preview';
import { ColorValueDisplay } from '../../shared/color-value-display';

export default function CmykRgbConverter() {
  const { toast } = useToast();
  const { colorHistory } = useColorHistoryContext();

  const [cmyk, setCmyk] = useState({ c: 18, m: 17, y: 84, k: 0 });

  const rgb = cmykToRgb(cmyk);
  const hex = rgbToHex(rgb);
  const cmykString = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  const handleInputChange = (key: keyof typeof cmyk, value: string) => {
    const numValue = Math.min(100, Math.max(0, Number(value) || 0));
    setCmyk((prev) => ({ ...prev, [key]: numValue }));
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
      sourceColor: 'CMYK',
      targetColor: 'RGB',
      sourceValue: cmykString,
      targetValue: rgbString,
    });
  };

  const handleColorSelect = (sourceValue: string) => {
    // Parse CMYK string like "cmyk(18%, 17%, 84%, 0%)"
    const matches = sourceValue.match(/cmyk\((\d+)%,\s*(\d+)%,\s*(\d+)%,\s*(\d+)%\)/);
    if (matches) {
      const [, c, m, y, k] = matches;
      setCmyk({
        c: parseInt(c),
        m: parseInt(m),
        y: parseInt(y),
        k: parseInt(k),
      });
    }
  };

  return (
    <Wrapper size="lg">
      <Container>
        <p>
          Easily transform your CMYK values into RGB values! Enter your CMYK values below and get
          instant, accurate results.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent>
              <div className="flex flex-col gap-y-6">
                {Object.entries({
                  Cyan: 'c',
                  Magenta: 'm',
                  Yellow: 'y',
                  'Black Key': 'k',
                }).map(([label, key]) => (
                  <div key={key}>
                    <div className="mb-2 flex items-center justify-between">
                      <Label>{label}</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={cmyk[key as keyof typeof cmyk]}
                          onChange={(e) =>
                            handleInputChange(key as keyof typeof cmyk, e.target.value)
                          }
                          className="w-20"
                          min={0}
                          max={100}
                        />
                        <span className="w-4 text-sm text-gray-500">%</span>
                      </div>
                    </div>
                    <Slider
                      value={[cmyk[key as keyof typeof cmyk]]}
                      onValueChange={([value]) => setCmyk((prev) => ({ ...prev, [key]: value }))}
                      max={100}
                      step={1}
                      className="mt-2"
                      color={label.toLowerCase()}
                    />
                  </div>
                ))}
              </div>

              <ColorHistory history={colorHistory} onColorSelect={handleColorSelect} />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <ColorPreview color={hex} />

              <div className="space-y-3">
                <ColorValueDisplay label="RGB" value={rgbString} onCopy={copyToClipboard} />
                <ColorValueDisplay label="CMYK" value={cmykString} onCopy={copyToClipboard} />

                <AddToHistoryButton
                  onClick={addToHistory}
                  disabled={colorHistory.items.length >= 5}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
      <Container className="flex flex-col items-start gap-4 py-8 md:flex-row md:items-start">
        <RelatedTools />
      </Container>
    </Wrapper>
  );
}
