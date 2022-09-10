import type { EntryCollection, Asset } from 'contentful'

export function useContentfulPresenter<T>(
  entryCollection: EntryCollection<T>,
  assetFieldName: string = 'image',
): T[][] {
  const modifiedEntries = entryCollection.items.map((entry) => {
    const fields = entry.fields as any
    fields[assetFieldName] = (fields[assetFieldName] as Asset).fields.file.url
    return fields
  })
  return [modifiedEntries]
}
