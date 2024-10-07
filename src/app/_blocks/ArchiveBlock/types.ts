import type { Page, Product } from '../../../payload/payload-types'

export type ArchiveBlockProps = Extract<Page['layout'][0], { blockType: 'archive' }> & {
  selectedDocs?: Array<{ relationTo: 'products'; value: string | Product }> // Add this line
}
