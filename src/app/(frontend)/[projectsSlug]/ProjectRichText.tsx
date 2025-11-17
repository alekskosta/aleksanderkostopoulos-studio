'use client'

import { RichText } from '@payloadcms/richtext-lexical/react'
import styles from './page.module.css'

type ProjectRichTextProps = {
  content: any
}

export default function ProjectRichText({ content }: ProjectRichTextProps) {
  if (!content) return null

  return <RichText data={content} className={styles.projectSlugText} />
}
