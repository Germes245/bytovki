import { query } from '../connect_to_database.js';

export async function mainPage(req, res) {
  //let request = await query`select 1`;
  res.render('main', {
    title: 'Главная',
  });
}
