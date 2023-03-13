export const groupBy = <T>(array: T[], key: keyof T): { [key: string]: T[] } =>
  array.reduce((acc, item) => {
    const groupByKey = item[key] as string
    if (!acc[groupByKey]) acc[groupByKey] = []
    acc[groupByKey].push(item)
    return acc
  }, {} as { [key: string]: T[] })
