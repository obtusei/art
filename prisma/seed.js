// import prisma from "../libs/prisma"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
          
  
    await prisma.museum.createMany({
      data:
      [
        {
          "name": "Museum of Nepali Art",
          "description": "The Museum of Nepali Art (MONA) occupies a unique position in the art world because of its focus on Nepali artistic practices and traditions. Nepali art is a reflection of the country’s culture and soul, with an artistic history spanning over two millennia. The museum houses a collection of Nepali art that covers both its religious traditions and more recent secular manifestations. Through regular exhibition, it explores the historic and cultural influences on Nepali art practices to encourage a better understanding, appreciation and promotion of Nepali art and artists.",
          "location": "KGH Courtyard, P.O. Box 21218, Thamel, Kathmandu, Nepal",
          "contacts": "Email- info@mona.com.np, Phone- 01-4700800",
          "image": 1
        },
        {
          "name": "National museum of Nepal",
          "description": "The museum is housed in a historical building built by General Bhimsen Thapa in early 19th century. The museum was initially named Chhauni Silkhana, literally meaning ‘the stone house of arms and ammunitions’, and is still popular by the name of Chhauni museum. One of the most popular museums in Kathmandu, Chhauni museum has wonderful historical collections and is divided into three main historical collections, each housed in a separate building. These collections let the people/visitors relive the history. The museum was opened for public by the then Prime Minister Juddha Sumsher JBR in the year 1938. Not only Nepalese were allowed to visit inside the museum at very low charge but also a building for an art museum was raised that was named after the founder himself as Juddha Jatiya Kalashala.It was only after 1967 that the museum was named as Rashtriya Sangralaya, the National Museum of Nepal.",
          "location": "Chhauni, Kathmandu",
          "contacts": "Phone- +977-1-4271478, 014271504, Email-info@nationalmuseum.gov.np",
          "image": 2
        },
        {
          "name": "Patan Museum",
          "description": "Patan Museum is housed in a courtyard within the Northernmost building complex of the Durbar area. The most picturesque setting of the palace that has been created in so small a place by piety and pride  is known now to the people as Keshav Narayan Chowk after a temple standing at the center of the courtyard dedicated to Keshavnarayan- a form of Lord Vishnu.This part is recorded in the history as Chaukot Durbar or four-cornered-fort-palace.In an International Campaign by UNESCO for safeguarding the monuments of Kathmandu valley, the Austrian Government joined hands with Nepal Government to preserve Patan Darbar Square. The ensuing project began in 1982 with the repair of Keshav Narayan Chowk that led finally to the transformation of a teaching museum to dessimination of knowldge on Buddhism prevailed in Patan- city of Art and Architecture.This is the first public museum in Nepal that has been created as an autonomous institution of this type managed by its own Board of Directors. The museum has been acclaimed, by the visitors, as one of the finest museums in South Asia. The popularity is growing day after day and is economically self sustained now.The collaborative effort of Austrian Government with Nepalese counterpart did not only restore the historical palace to its original grandeuer but also created a Model Cultural Institution in Nepal.",
          "location": "Patan Durbar Square",
          "contacts": "Phone- 01-5521492",
          "image": 3
        },
        {
          "name": "The taragaon museum",
          "description": "The Taragaon Museum is supported by The Saraf Foundation for Himalayan Traditions & Culture. The museum is the starting point of the Foundation’s aim to document Nepal’s cultural heritage and support historic preservation in the Kathmandu valley and beyond. Before the restoration, Taragaon was a hostel which has now been restored and at places enlarged. It now houses a permanent collection, contemporary art exhibitions, events and performances, café and bar, and is known for its high quality & avant-garde art & performances. In 1970s, what started as a hostel for young and adventurous, and has evolved is a space that preserves, document and celebrates Art & Culture.",
          "location": "Boudhanath Sadak",
          "contacts": "Phone- 01-5911857",
          "image": 4
        },
        {
          "name": "National Art Museum",
          "description": "The national art museum of Bhaktapur is one of the best acquisition hubs of medieval as well as the lichhavi art and history. That was a former palace then named Simhadhwaka Durbar. For the reason of having an image of a pair of stone lions. King Bhupatindra Malla erected it in 1698 A.D. Also, picturesque it as Malatichwok. But locals prefer to call it Simhadhwoka layaku rather than Malatichwok. Later, in 1960, the Government of Nepal and the Department of Archaeology set it up as the National Art Gallery. The National Art Museum was inaugurated by Bishwesvar Prasad Koirala. He was Nepali Congress Supreme and the very first elected prime minister of Nepal. Consequently, this museum is the best among the three museums of Bhaktapur. You can easily find this place, once you enter the Bhaktapur Durbar Square. The two stone images of lions pleasantly embrace you.",
          "location": "Bhaktapur durbar square",
          "contacts": "Phone-984-3999813",
          "image": 5
        },
        {
          "name": "Siddhartha Art Gallery",
          "description": "Siddhartha Art Gallery was established by art-patron Sangeeta Thapa, and internationally recognized artist Shashikala Tiwari, on September 27th, 1987 as a contemporary art space and meeting point for national and international artists.The Gallery was intitally located in Pratap Bhawan Kantipath.",
          "location": "Baber Mahal Revisited",
          "contacts": "Phone-01-4218048",
          "image": 6
        },
        {
          "name": "Kaalo.101",
          "description": "At Kaalo.101, we aim to create a socially conscious, completely independent creative space that uses art to uplift emerging Nepali artists while engaging with our surrounding physical, social and cultural environment through an accessible, communicative and collaborative exchange.",
          "location": "Lalitpur",
          "contacts": "Phone-980-3553123",
          "image": 7
        },
        {
          "name": "International Mountain Museum",
          "description": "Mountains and mountaineering have a history of their own. Without preserving it, it will not be long before all the records and evidences will be lost forever. Nepal Mountaineering Association (NMA), established on 1 Nov 1973, initiated the establishment of International Mountain Museum (IMM) in Pokhara. The basic objective for its establishment was made to record, document and chronicle the past and present development of mountaineering activities in the world in general and to preserve the saga of the momentous feats in the history of mountaineering in the Himalayan peaks in particular. The foundation stone of IMM was laid on 1 Dec, 1995. The soft opening of IMM took place on 29 May, 2002 where it was officially opened on 5 Feb, 2004.",
          "location": "Ratopairo, Pokhara",
          "contacts": "Phone- 061-460742",
          "image": 8
        },
        {
          "name": "Nepal Academy of Fine Arts",
          "description": "Nepal Academy of Fine Arts has a spacious museum with rare collections of both traditional and contemporary paintings, sculptures and other artworks. The museum presents visual history of Nepali art and culture in aesthetic manner. The place can be the authentic source for art historian and critics, and a source of inspiration for artists as it depicts the root of Nepali art. The museum houses the masterpieces of the past and the present.",
          "location": "Sita Bhawan, Naxal",
          "contacts": "Kathmandu, Nepal +977 1 44 11 645, +977 1 44 21 206, +977 1 44 11 729, +977 1 44 30 251, Email-info@nafanepal.org",
          "image": 9
        },
        {
          "name": "Narayanhiti Palace Museum",
          "description": "Narayanhiti Palace Museum is established on the backdrop of the beginning of The Federal Democratic Republic of Nepal. Ten years of people's war and nineteen days of people's movement played decisive role for the major political shift in the country. In line with the political changes, Narayanhiti Royal Palace was converted into a public museum and was inaugurated by the then Prime Minister Girija Prasad Koirala on 15 June, 2008. The exhibition of the museum was officially thrown open to the general public after its inauguration by Prime Minister Puspa Kamal Dahal on 26 February, 2009.",
          "location": "Narayanhiti Path",
          "contacts": "Phone-01-4227844",
          "image": 10
        }
      ] 
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