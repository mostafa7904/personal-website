import type { EntryCollection, Asset } from 'contentful'

export function useContentfulPresenter<T>(
  _entries: EntryCollection<T>,
  assetFieldName: string = 'image',
): T[][] {
  const entries = _entries.items.map((entry) => {
    const fields = entry.fields as any
    fields[assetFieldName] = (fields[assetFieldName] as Asset).fields.file.url
    return fields
  })
  return [entries]
}
