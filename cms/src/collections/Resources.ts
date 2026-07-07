import type { CollectionConfig } from 'payload'
import {
  contentAccess, slugField, orderField, stringList, paragraphs, linkArray, iconField,
} from '../fields/shared'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: { singular: 'Resource Article', plural: 'Resource Articles' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category', 'order'], group: 'Resources' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    slugField,
    { name: 'title', type: 'text', required: true },
    { name: 'category', type: 'text' },
    iconField(),
    { name: 'excerpt', type: 'textarea' },
    paragraphs('body'),
    { name: 'quote', type: 'textarea', admin: { description: 'Optional pull-quote.' } },
    {
      name: 'video',
      type: 'group',
      admin: { description: 'Optional embedded YouTube video.' },
      fields: [
        { name: 'title', type: 'text' },
        { name: 'youtube', type: 'text', admin: { description: 'YouTube video ID (not the full URL).' } },
      ],
    },
    linkArray('links', 'Explore further (external links)'),
    paragraphs('references', 'Academic references'),
    orderField,
  ],
}

export const ResourceLinkGroups: CollectionConfig = {
  slug: 'resource-link-groups',
  labels: { singular: 'Resource Link Group', plural: 'Resource Link Groups' },
  admin: { useAsTitle: 'heading', defaultColumns: ['heading', 'order'], group: 'Resources' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    { name: 'heading', type: 'text', required: true },
    linkArray('links'),
    orderField,
  ],
}

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  admin: { useAsTitle: 'q', defaultColumns: ['q', 'order'], group: 'Resources' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    { name: 'q', type: 'text', required: true, label: 'Question' },
    { name: 'a', type: 'textarea', required: true, label: 'Answer' },
    orderField,
  ],
}

export const Helplines: CollectionConfig = {
  slug: 'helplines',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'detail', 'order'], group: 'Resources' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'detail', type: 'text' },
    { name: 'href', type: 'text' },
    orderField,
  ],
}
