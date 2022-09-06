import type { EntryCollection, Asset } from 'contentful'

export function useContentfulPresenter<T>(
  _entries: EntryCollection<T>,
  assetFieldName: string = 'image'
): T[][] {
  const assets: Asset[] = _entries.includes?.Asset
  if (!assets) return [_entries.items.map(v => v.fields)]

  const entries = _entries.items.map((entry, index) => {
    const fields = entry.fields as any
    fields[assetFieldName] = assets[index].fields.file.url
    return fields
  })
  return [entries]
}
