/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface BrandAssetDetail {
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  codeSnippet?: string;
  svgPreview?: string;
}

export interface ShowcaseCard {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  category: string;
  iconName: string; // lucide icon name
  assets: BrandAssetDetail[];
}

export interface BlueprintToken {
  name: string;
  value: string;
  category: string;
  desc: string;
}

export interface BlueprintModule {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tokens?: BlueprintToken[];
  previewComponent?: string; // identifier of the interactive playground to render
}

export interface SustainabilityMilestone {
  year: string;
  title: string;
  description: string;
  impactMetric: string;
  status: 'achieved' | 'active' | 'scheduled';
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  tag: string;
  year: string;
  stats: { label: string; value: string }[];
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
