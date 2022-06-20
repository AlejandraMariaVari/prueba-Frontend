export function formatNumber(number) {
  const result = new Intl.NumberFormat('es-AR', {
    style: 'decimal',
    currency: 'ARS',
  }).format(number)

  const addSign = `$ ${result}`
  return addSign
}
