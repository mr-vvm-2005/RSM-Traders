const WHATSAPP_NUMBER = '919578312345'

export function whatsappLink(productName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!productName) return `${base}?text=${encodeURIComponent('Hello, I am interested in your products.')}`
  const message = `Hello I am interested in ${productName}`
  return `${base}?text=${encodeURIComponent(message)}`
}

export const PHONE_NUMBERS = ['9578312345', '9942222574']
export const CONTACT_EMAIL = '81maranmani@gmail.com'
export const MAP_LINK = 'https://maps.app.goo.gl/5aLBn4Aq86ddhaXMA'

export const HEAD_OFFICE = '4/82 Main Road, Venkateswara Puram – 627854'
export const BRANCH = 'D.No 18/7/240, Sivagurunatha Puram, Surandai – 627859'

export const STOCKISTS = ['Oshon Vijay', 'Allwin Jelly', 'Yawin']
