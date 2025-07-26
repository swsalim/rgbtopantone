import { Gamepad2 } from 'lucide-react';

export interface Tool {
  title: string;
  href: string;
  description: string;
  isExternal?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
}

export const tools: Tool[] = [
  {
    title: 'Clinic Geek',
    href: 'https://www.clinicgeek.com/?ref=rgbtopantone.com',
    description: 'Clinic Geek is a directory of clinics in Singapore.',
    isExternal: true,
  },
  {
    title: 'Bye Indonesia',
    href: 'https://www.byeindonesia.com/?ref=rgbtopantone.com',
    description: 'Renunciation of Indonesian Citizenship Guide',
    isExternal: true,
  },
  {
    title: 'Indie World Map',
    href: 'https://www.indieworldmap.com/?ref=rgbtopantone.com',
    description: 'Discover & explore indie hacker projects globally.',
    isExternal: true,
  },
  {
    title: 'Random Number Generator',
    href: 'https://www.randomnumberapp.com/?ref=rgbtopantone.com',
    description: 'Random number generator for numbers 0 to 10,000.',
    isExternal: true,
  },
  {
    title: 'Resize Image',
    href: 'https://pfpresizer.com/?ref=rgbtopantone.com',
    description:
      'Quickly resize your profile picture for Instagram, Facebook, WhatsApp, and other platforms. Free and easy-to-use PFP resizer for all social media platforms.',
    isExternal: true,
  },
  {
    title: 'Flip Image',
    href: 'https://www.flipanimage.xyz/?ref=rgbtopantone.com',
    description: 'Flip an image horizontally or vertically for free.',
    isExternal: true,
  },
  {
    title: 'Play Sudoku',
    href: 'https://sudokuunlimited.com/?ref=rgbtopantone.com',
    description: 'Play free Sudoku online from Easy to Expert level',
    isExternal: true,
  },
  {
    title: 'CMYK to Pantone Converter',
    href: 'https://www.cmyktopantone.com/?ref=rgbtopantone.com',
    description:
      'Get instant, accurate Pantone matches for your CMYK colors. Perfect for designers, printers & creative professionals who need reliable color conversions.',
    isExternal: true,
  },
  {
    title: 'Water a Day',
    href: 'https://www.wateraday.com/?ref=rgbtopantone.com',
    description: 'How Much Water Should You Drink Daily?',
    isExternal: true,
  },
  {
    title: 'Will it rain tomorrow?',
    href: 'https://www.willitraintomorrow.com/?ref=rgbtopantone.com',
    description:
      "Tomorrow's Weather Forecast, Today's Advantage - Plan Your Day Right, Come Rain or Shine",
    isExternal: true,
  },
  {
    title: 'mainan.fun',
    href: 'https://www.mainan.fun/?ref=rgbtopantone.com',
    description:
      "Mainan is where you'll discover handpicked educational toys that blends learning with fun. Perfect picks for curious minds are just a click away!",
    isExternal: true,
  },
  // {
  //   title: 'Color Palette Generator',
  //   href: '/palettes',
  //   description: 'Generate beautiful color palettes with a click.',
  //   icon: undefined,
  // },
  {
    title: 'Pantone Color Match Game',
    href: 'https://www.cmyktopantone.com/pantone-color-match',
    description: 'Color Memory Match: Find the Pantone color pairs in a fun memory game.',
    icon: Gamepad2,
    iconClassName: 'text-pink-500',
  },
  {
    title: 'Aesthetic Clinics Malaysia 🇲🇾',
    href: 'http://www.aestheticclinics.my/?ref=rgbtopantone.com',
    description: 'Aesthetic clinics directory in Malaysia',
    isExternal: true,
  },
  {
    title: 'Dental Clinics Malaysia 🇲🇾',
    href: 'http://www.dentalclinicclosetome.my/?ref=rgbtopantone.com',
    description: 'Dental clinics directory in Malaysia',
    isExternal: true,
  },
  // {
  //   title: 'Color Blindness Simulator',
  //   href: '/color-blindness',
  //   description: 'Simulate your design as seen by the color blind.',
  //   icon: undefined,
  // },
  // {
  //   title: 'Gradient Generator',
  //   href: '/gradients',
  //   description: 'Create beautiful gradients from any two colors.',
  //   icon: undefined,
  // },
];
