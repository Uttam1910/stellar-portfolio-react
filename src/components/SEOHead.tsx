import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  jsonLd?: object | object[];
}

export const BASE_URL = "https://www.uttamthapa.com";
export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/tvl.PNG`;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  "name": "Uttam Thapa",
  "url": `${BASE_URL}/`,
  "image": `${BASE_URL}/images/avtar.png`,
  "jobTitle": "Full-Stack Software Engineer",
  "description": "Full-Stack Software Engineer building multi-tenant SaaS commerce platforms, scalable REST APIs, microservices, and AI applications.",
  "worksFor": {
    "@type": "Organization",
    "name": "Growve",
    "url": "https://growve.com"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Mumbai University - MCT's Rajiv Gandhi Institute of Technology (RGIT), Mumbai",
    "sameAs": "https://mctrgit.ac.in"
  },
  "sameAs": [
    "https://github.com/Uttam1910",
    "https://www.linkedin.com/in/uttam-thapa-1798a925a/"
  ],
  "knowsAbout": [
    "Full-Stack Software Engineering",
    "SaaS Architecture",
    "Multi-Tenant Database Systems",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Fastify",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "MongoDB",
    "Redis",
    "BullMQ",
    "WebSockets",
    "Stripe & Razorpay Webhooks",
    "AI Systems & OpenAI Embeddings",
    "Machine Learning",
    "Computer Vision",
    "Docker",
    "Microsoft Azure"
  ]
};

export const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": `${BASE_URL}/`,
  "name": "Uttam Thapa",
  "publisher": {
    "@id": `${BASE_URL}/#person`
  },
  "description": "Official personal engineering portfolio of Uttam Thapa, Full-Stack Software Engineer."
};

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:url': canonicalUrl,
      'og:image': ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`,
      'og:type': ogType,
      'og:site_name': 'Uttam Thapa'
    };

    Object.entries(ogTags).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 5. Update Twitter Card Tags
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:url': canonicalUrl,
      'twitter:image': ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`
    };

    Object.entries(twitterTags).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 6. Update JSON-LD Script
    let scriptTag = document.getElementById('seo-jsonld-script') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-jsonld-script';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemasToInject = [
      personJsonLd,
      webSiteJsonLd,
      ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [])
    ];

    scriptTag.text = JSON.stringify(schemasToInject);
  }, [title, description, canonicalUrl, ogImage, ogType, jsonLd]);

  return null;
};
