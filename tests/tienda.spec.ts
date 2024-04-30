
import {test , expect} from '@playwright/test'
test('ingreso direccion', async({page})=>{
// ir a la url https://habi.co/
await page.goto('https://habi.co/');
await page.locator('#cta-hero p:has-text("Solicitar oferta")').click;
await page.locator('.fQOlMm p:hast-text("Apartamento en conjunto residencial")').click;
await page.locator('#react-select-2-placeholder("Seleccione")').click;

//click en solicitar oferta 
//click en el selector de ciudades 
//escoger la opcion de Cali
//dar click a ingresar manualmente
//en tipo de calle seleccionar calle 
// escribir en los inputs la direccion 
// dar click en continuar
})