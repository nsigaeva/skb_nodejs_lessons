/**
 * Created by admin on 14.11.2016.
 */

function findMatch(url){
  const re = new RegExp('@?(https?:)?(\/\/)?((www|[A-Z]|telegr|vk|vkontakte|twitter|github)[^\/]*\/)?([a-zA-Z0-9]*)');
  const result = url.match(re);
  console.log(result);
  return result;
}
 const array = [
 'https://telegram.me/skillbranch',
 'https://telegrsfsf.me/skillbranch',
 'https://telegram.me/skillbranch123',
 'https://Telegram.me/skillbranch',
 'https://telegram.mE/Skillbranch',
 'https://Telegram.me/SkillBranch',
 '//telegram.me/skillbranch',
 'telegram.me/skillbranch',
 'skillbranch',
 '@skillbranch',
 'https://vk.com/skillbranch',
 'http://vk.com/skillbranch',
 'http://www.vk.com/skillbranch',
 '//vk.com/skillbranch',
 'vk.com/skillbranch',
 'vk.com/skillbranch/profile',
 'https://vk.com/skillbranch?w=wall-117903599_1076'
 ];

 array.forEach((url) => {
 const username = findMatch(url);
 console.log('@'+username[5]);
 });

