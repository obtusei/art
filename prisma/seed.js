// import prisma from "../libs/prisma"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
          
  
    await prisma.artist.createMany({
      data:
      [{
  "name": "samundra man singh shrestha",
  "description": "Born in 1980, Shrestha is a trained Paubha artist. He started his journey into the world of art at the tender age of 14.  Shrestha’s work skillfully combines his inspiration and mastery of the traditional Newar style of painting with conceptual contemporaneity—with binaries and juxtaposition of past and present, modern and traditional, and the aesthetic with pure conception. His innovative works push the boundaries of the sacred and secular, by challenging the very categories of contemporary and traditional art. His art works are deeply rooted in the sacred knowledge of iconography of deities, He has received significant national and international awards, and his work is in major collection of India, UK, US, Europe, and East Asia.",
  "image": 1
},
{
  "name": "rajan kumar pant",
  "description": "born in 1976, Pant received his MFA from Department of Fine Arts, Tribhuvan University and Masters in Sociology from Tri-Chandra College, TU. He acted as Vice President of Artist society of Nepal (2000-2004) and Executive member of Young Artists’ Group(YAG) (1995-2007). He is the founder of Altamira School of Visual Arts and Zero Century Fine Arts Foundation.",
  "image": 2
},
{
  "name": "anand muni shakya",
  "description": "Born in 1904, Shakya began his artistic career in Lhasa, Tibet, at the age of 18. Buddhism and the influence of the Tibetan Thangka tradition play a central role in his artwork. Drawing inspiration from his work, his son, Siddimuni Shakya, has contributed to the development of Paubha art in Nepal.",
  "image": 3
},
{
  "name": "prem man chitrakar",
  "description": "Born in 1944, at Suichatar, Kathmandu, Chitrakar completed his Intermediate level in Humanities, and inherent his family occupation of painting, much against his father’s wish. However, he was well supported by his mother, who died early in his life and later by his wife. During his childhood, he would spend many days on the terrace of his house far from his father’s gaze, and practice drawing on the tin sheets. He believes that this ancient art form should be continued by the new generations following the texts of iconography and iconometry, yet exploring one’s own style. He worked as a Sikka Designer (designer of coins) at the Nepal Rasta Bank.Besides painting, he has published many Newari language publications including Prarampara Chojya Bidhi and Nepal Bhasaya Mecha Dapa Khala Jhigu Sa. He was the former Chairman of Nepal Paramparagat Kalakar Sangh and Founder Adviser of the Artist’s Society. ",
  "image": 4
},
{
  "name": "lok chitrakar",
  "description": "Born into a lineage of traditional artist, Chitrakar made his first complete painting at the age of 12. He seeks to preserve this ancient tradition in many ways and has opened a space for traditional art, where interested candidates can learn the theory as well as practicum of the subject. Although a self-taught artist, he has given continuity to the legacy of using mineral and natural pigments in his paintings. The rich art, culture and architecture around him is his constant inspiration, and theme for his artworks. He has served as a guest-lecturer at universities in Nepal and abroad. His work is to be found in museums and private collections throughout Nepal, Asia, Europe, and the United States.",
  "image": 5
},
{
  "name": "manikman chitrakar",
  "description": "Born in 1964, Chitrakar immensely contribution in Newari and Paubha art. He worked in the Royal Palace from 1932 to 1940. His first exhibition was held in Paropakar in 1957, followed by another exhibition in 1968 at Buddha Jayanti. From 1968 to 1974 he was involved in NAFA’s exhibition, and in 1970 he participated in Japanese Art exhibition. ",
  "image": 6
},
{
  "name": "raj prakash man tuladhar",
  "description": "Born in 1975, he was soon immersed in the local arts, thangkas, cultural themes and even traditional drum music. Raj Prakash never attended any formal college studies, but learnt his skills through some of the best teachers of paubha in Nepal. Prem Man Chitrakar was his main mentor, when he was just 16 years old. Until around 1987 (35 years ago) only the Chitrakar caste was allowed to teach the art of paubha painting. Now that has changed, and with those new ideas came the flourishing and diverse paubha art scene of today, where tradition and modernism meet in an amazing cacophony of colours and creative designs. ",
  "image": 7
},
{
  "name": "rabi shrestha",
  "description": "Rabi is from what was the small farming community of Tokha north of Kathmandu. His father was a carpenter in between toiling in the fields. He was born in 1990 before the urbanization of the valley really began, so he too experienced first-hand the life of a valley farmer. He recalls being fascinated by drawing as a child and it was his first passion at an early age. Having studied art first at Sirjana College followed by a BFA at Lalitkala Campus, he deliberately did not continue his formal studies to a Master’s degree. Having to study other forms of art (portrait, landscape etc) did not appeal at the time, as he already knew that paubha art was his true vocation.",
  "image": 8
},
{
  "name": "ujay bajracharya",
  "description": "Born in 1981, Bajracharya succeeded 3rd Level Skill Test as Paubha Artist, conducted by Council for Technical Education and Vocational Training (CTEVT) organized by Handecen. He received various training such as Paubha painting training from Akheshwor Mahabihar; Pulchowk, iconography training organized by Right Livelihood Research Centre and Saddharma Kashya training organized by Youngsters Club; Nagbahal. He is the recipient of various national as well as international awards and had participated in many national as well as international exhibitions.",
  "image": 9
},
{
  "name": "ritesh shahi",
  "description": "Born in 1989, Ritesh is already well on the road to becoming a significant artist in the painting circles of paubha. From a very early age Ritesh recalls being fascinated by the temple art in the Kathmandu Valley; he has retained a great passion for the art and culture of his home city ever since. In those early formative years, he would observe the temples and their art and then come home to draw the images seen.",
  "image": 10
},
{
  "name": "sabita dangol",
  "description": "Sabita Dangol (1984), a visual artist based in Kathmandu, Nepal.",
  "image": 11
}] 
    })


}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1)
    })
    .finally(async () =>{
        await prisma.$disconnect();
    });