import { Link } from "react-router-dom";
import { JournalPhoto } from "../components/JournalPhoto";
import { EstateMap } from "../features/EstateMap";
import { RoseSeasonGuide } from "../features/RoseSeasonGuide";
import { TableStudy } from "../features/TableStudy";
import { SoilStory } from "../features/SoilStory";
import { ValleyGuide } from "../features/ValleyGuide";
import { VIGNETTES_FACILITIES, VIGNETTES_PHOTO_OPS } from "../data/siteContent";
import "./estate-content.css";

export function JournalHome() {
  return (
    <div className="journal-page">
      <section className="farm-opening">
        <div className="opening-copy">
          <h1>
            A working rose farm.
            <br />A place to gather.
          </h1>
          <p>
            More than 2,500 heirloom rose bushes, rooted in Santa Ynez soil.
            Dawn cuts in the garden. Private celebrations on the estate.
          </p>
          <div className="choice-row">
            <Link className="journal-button" to="/the-farm">
              Meet the farm
            </Link>
            <Link className="text-link" to="/venue">
              Gather here ↗
            </Link>
          </div>
          <p className="opening-location">
            Ecomama Farms · Santa Ynez Valley, California
          </p>
        </div>
        <figure>
          <JournalPhoto
            file="17-dji-0658-enhanced-sr.jpg"
            alt="The farm’s rose beds surrounding the central lawn, seen from above"
            priority
          />
          <figcaption>
            The rose garden, with room at its heart to come together.
          </figcaption>
        </figure>
      </section>
      <section className="journal-section field-spread">
        <figure>
          <JournalPhoto
            file="35-the-laras-sb1-87.jpg"
            alt="Roses climbing an arch over a garden path"
          />
          <figcaption>Among the rose beds.</figcaption>
        </figure>
        <div>
          <h2>
            The day begins
            <br />
            in the garden.
          </h2>
          <p className="large-reading">
            Before the tables are set, there is soil to tend and a harvest to
            make. Ecomama is a working biodynamic farm, and the garden is where
            our story starts.
          </p>
          <p>
            Meet the roses by colour and form, learn about the soil beneath
            them, and bring your questions to the grower.
          </p>
          <Link className="text-link" to="/floral">
            Explore the rose year ↗
          </Link>
          <aside className="field-note">
            <h3>A note on the harvest</h3>
            <p>
              Flowers follow the weather. Share what draws your eye; the team
              will confirm what can be cut for your date.
            </p>
          </aside>
        </div>
      </section>
      <section className="gathering-spread">
        <JournalPhoto
          file="18-sb5-52.jpg"
          alt="Long tables set outdoors beside the estate barn"
        />
        <div>
          <h2>
            Set a long table.
            <br />
            Invite your people.
          </h2>
          <p>
            Private estate gatherings shaped around your day, with the rose
            garden, lawn, and barns as their setting.
          </p>
          <Link className="journal-button" to="/venue">
            Explore the estate
          </Link>
        </div>
      </section>
      <section className="journal-section journal-index">
        <h2>Open the field journal</h2>
        <Link to="/vignettes">
          <span>Walk the estate</span>
          <p>Get to know the garden, barns, lawn, and preparation spaces.</p>
          <span aria-hidden="true">↗</span>
        </Link>
        <Link to="/sustainability">
          <span>Look below the surface</span>
          <p>Compost, roots, beneficial life, and water stewardship.</p>
          <span aria-hidden="true">↗</span>
        </Link>
        <Link to="/local-recommendations">
          <span>Stay a little longer</span>
          <p>Find a bakery, explore a town, and plan a day in the valley.</p>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
function Heading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="compact-heading">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
const facilityNotes = [
  "Exchange vows on the central lawn, with the rose beds around you and the Santa Ynez Mountains beyond. Leave time after the ceremony for family photographs before joining your guests.",
  "Long tables, mountain views, and dinner outdoors. The lawn seats up to 150 guests in the published venue guide. Discuss table spacing, service access, and a weather plan with your planner.",
  "An open-air barn for a welcome gathering, luncheon, or cocktail hour. It offers a change of setting while the team prepares the next part of your celebration.",
  "Bring dinner and dancing into the barn, with mountain views still part of the evening. Plan the dining layout and entertainment together so guests can settle in for the night.",
  "A private preparation room beside the Rose Barn. Gather your wedding party here before the ceremony, with a place for dressing, a few portraits, and a quiet pause.",
  "Inside the Mountain View Barn, the loft gives the bridal party room to prepare together. Build hair, makeup, getting-ready photographs, and a little breathing room into the morning."
];
const portraitNotes = [
  "Climbing roses frame the garden arch. A close portrait here can carry the same flowers and colours as the wider ceremony setting.",
  "The timber bridge gives first-look photographs a different scale and texture. Ask your photographer to include it in the walkthrough before deciding on the day's route.",
  "The spreading oak offers a strong natural frame for a portrait. Visit with your photographer to see how the light falls at the time you plan to step away.",
  "A flagstone path runs between the olive trees. It makes room for walking photographs and an unhurried moment together between the formal parts of the day.",
  "A weeping willow and visiting ducks give this corner its character. The published archive describes the pond as under construction. Confirm completion and current access before planning portraits here.",
  "Fruit trees connect your photographs to the working farm. Blossom, leaves, and fruit change with the seasons, so the backdrop will belong to the time of your visit."
];
function EstateCollection({ portraits = false }: { portraits?: boolean }) {
  const collection = portraits ? VIGNETTES_PHOTO_OPS : VIGNETTES_FACILITIES;
  return <section className="journal-section estate-collection" aria-label={portraits ? "Six portrait locations" : "Six event facilities"}>
    <div className="estate-section-intro"><h2>{portraits ? "Six places to pause for a portrait" : "Six facilities, a whole day together"}</h2><p>{portraits ? "Choose a few favourites with your photographer. A private walkthrough helps you plan around the light, the season, and your guests." : "Four celebration spaces and two preparation suites make room for every part of the day. These are event facilities, not a promise of overnight accommodation."}</p></div>
    <div className="estate-photo-grid">{collection.map((place, index) => <article key={place.title}>
      <JournalPhoto file={place.image.replace("/images/", "")} alt={place.alt} />
      <h3>{!portraits && index === 0 ? "Heart of the Rose Garden" : portraits && index === 4 ? "The Willow Pond" : place.title}</h3>
      <p>{portraits ? portraitNotes[index] : facilityNotes[index]}</p>
    </article>)}</div>
  </section>;
}
function CelebrationFlow() {
  return <section className="journal-section celebration-flow"><h2>Imagine the day moving through the farm</h2>
    <ol><li><h3>A quiet beginning</h3><p>Prepare in the Bridal Loft and Groomsmen's Cottage, then meet for a first look along Olive Lane or at the Rose Arch.</p></li><li><h3>Vows in the garden</h3><p>Gather in the Heart of the Rose Garden. Follow the ceremony with cocktails at the Rose Barn while you slip away for portraits.</p></li><li><h3>Dinner, then dancing</h3><p>Choose supper on the Terraced Lawn or dinner in the Mountain View Barn. Set the evening's flow with your planner and estate team.</p></li></ol>
    <p className="content-note">An example itinerary to discuss, not a fixed package. Your guest count, access needs, weather plan, and contracted spaces shape the final schedule.</p>
    <Link className="journal-button" to="/contact">Arrange an estate walkthrough</Link>
  </section>;
}
export function JournalVenue() {
  return <div className="journal-page">
    <Heading title="The estate, in full" description="Six event facilities, six portrait locations, and more than 30 acres of working farm in the Santa Ynez Valley. A private setting for a celebration that moves at your pace." />
    <figure className="wide-photo"><JournalPhoto file="18-sb5-52.jpg" alt="An outdoor estate reception on the Terraced Lawn" priority /><figcaption>A long-table evening on the Terraced Lawn.</figcaption></figure>
    <section className="journal-section reading-column"><h2>Room for the people you love</h2><p>The estate accommodates up to 180 guests. The Terraced Lawn is listed for up to 150 seated outdoors. The garden, two barns, and preparation suites each have a part to play, with a layout tailored to your gathering.</p><p>Walk the grounds with the team before choosing your ceremony setting, reception layout, and portrait stops. Confirm capacity, step-free routes, weather arrangements, and access for your event.</p><Link className="text-link" to="/services">Compare the ways to gather here</Link></section>
    <EstateCollection /><CelebrationFlow /><EstateCollection portraits /><EstateMap /><TableStudy />
  </div>;
}
export function JournalVignettes() {
  return <div className="journal-page"><Heading title="Vignettes & locations" description="Explore all six event facilities and six portrait locations. Each has its own light, textures, and place in a day on the farm." />
    <nav className="journal-section estate-jump-links" aria-label="Locations on this page"><a href="#event-facilities">Event facilities</a><a href="#portrait-locations">Portrait locations</a><a href="#day-on-the-farm">Plan the flow</a></nav>
    <div id="event-facilities"><EstateCollection /></div><div id="portrait-locations"><EstateCollection portraits /></div><div id="day-on-the-farm"><CelebrationFlow /></div><EstateMap />
  </div>;
}
export function JournalFarm() {
  return (
    <div className="journal-page">
      <Heading
        title="It starts with the soil"
        description="A biodynamic rose farm in the Santa Ynez Valley, with more than 2,500 heirloom bushes, an orchard, and the daily work of caring for the land."
      />
      <section className="journal-section field-spread">
        <figure>
          <JournalPhoto
            file="35-the-laras-sb1-87.jpg"
            alt="Sunlight on roses around the garden arch"
            priority
          />
          <figcaption>A path through the rose garden.</figcaption>
        </figure>
        <div>
          <h2>
            Cut at dawn.
            <br />
            Grown through the seasons.
          </h2>
          <p className="large-reading">
            The garden changes through the year. A stem’s colour and form tell
            only part of its story; the grower knows when it is ready.
          </p>
          <p>
            Browse the archive and choose a few references to bring into a
            conversation about flowers.
          </p>
          <Link className="journal-button" to="/floral">
            Meet the roses
          </Link>
        </div>
      </section>
      <SoilStory />
    </div>
  );
}
const floralLookbook = [
  ["55-hanna-carl-wedding-by-rachel-wakefield.jpg", "Pale blush rose opening against dark foliage", "The detail of a garden rose"],
  ["57-41644fac5b61ef23a218be562535fba8-xxlarge.jpg", "White flower bouquet resting on an upholstered wooden bench", "A bouquet before the ceremony"],
  ["58-val-and-blake-wedding-preview.jpg", "Wedding party holding rose bouquets", "Flowers carried by your people"],
  ["62-ecomama-farms-james-and-jess-2.jpg", "Yellow and blush roses arranged with foliage on a ceremony arch", "Colour around the ceremony arch"],
  ["64-sb4-9.jpg", "Basket of white flowers beside ceremony seating", "A garden-led ceremony"],
  ["69-ecomama-farms-james-and-jess.jpg", "Bride holding a pink, peach, and yellow bouquet", "Warm colour, gathered by hand"],
  ["63-ecomama-farms-james-and-jess-3.jpg", "Pink roses growing in the garden", "Among the rose beds"],
  ["18-sb5-52.jpg", "Long outdoor reception tables with low floral arrangements", "Flowers at the table"],
];
export function JournalFloral() {
  return <div className="journal-page"><Heading title="Roses with a sense of place" description="More than 2,500 heirloom and David Austin rose bushes. Grown in living Santa Ynez soil, cut at dawn, and gathered for the moments you will remember." />
    <section className="journal-section field-spread"><figure><JournalPhoto file="83-ecomama-md22-20.jpg" alt="Hands lifting a colourful garden bouquet" priority /><figcaption>A handful of colour from the farm's floral archive.</figcaption></figure><div><h2>The old-fashioned beauty of a garden rose</h2><p className="large-reading">Layered petals, open cups, soft colour, and stems that keep their natural movement. Heirloom roses and David Austin English roses bring a vintage garden character to bouquets and tables.</p><p>Heirloom roses carry the forms of older garden varieties. David Austin roses are a distinct breeding tradition associated with that same full, romantic flower shape. The farm grows both; each harvest offers its own mix of form, colour, and fragrance.</p><p>For couples and planners, the garden is a starting point for the whole celebration. Choose a palette and a feeling, then work with the floral team on bouquets, ceremony flowers, and table arrangements that suit your date.</p><Link className="journal-button" to="/contact">Talk with the floral team</Link></div></section>
    <section className="journal-section floral-lookbook"><div className="estate-section-intro"><h2>A floral lookbook</h2><p>Individual blooms, bouquets, wedding parties, and flowers at the table. Gather references from past celebrations; the team will confirm varieties and quantities for your season.</p></div><div className="floral-photo-grid">{floralLookbook.map(([file, alt, caption]) => <figure key={file}><JournalPhoto file={file} alt={alt} /><figcaption>{caption}</figcaption></figure>)}</div></section>
    <section className="journal-section floral-practice"><h2>From living soil to the table</h2><div><article><h3>A dawn harvest</h3><p>The day starts among the roses, before the heat settles in. Cutting close to the celebration keeps the flowers connected to the garden and lets the floral team work with the day's harvest.</p></article><article><h3>Foam-free design</h3><p>Our floral approach favours foam-free arrangements and the natural shape of each stem. Discuss vessels, supports, installation needs, and what can be reused after your celebration.</p></article><article><h3>A garden fed by the farm</h3><p>Plant trimmings and other organic material return to the compost cycle. Soil care supports the roses long before a stem reaches a vase. Read about the farm's biodynamic practices and closed-loop composting.</p><Link className="text-link" to="/sustainability">How we care for the soil</Link></article></div></section>
    <RoseSeasonGuide />
    <section className="journal-section reading-column"><h2>Bring your references. Leave room for the season.</h2><p>Share your date, guest count, colours, and the arrangements you have in mind. The archive is inspiration rather than a current stock list. Cultivar identities, fragrance, bloom timing, and harvest quantities are confirmed with the grower.</p><Link className="journal-button" to="/contact">Begin a floral inquiry</Link></section>
  </div>;
}
export function JournalSustainability() {
  return <div className="journal-page"><Heading title="Care for the ground" description="Biodynamic growing begins with the whole farm. Soil, roses, orchard trees, animals, and wildlife all belong to the same daily work." />
    <figure className="wide-photo"><JournalPhoto file="35-the-laras-sb1-87.jpg" alt="Roses growing around a garden arch" priority /><figcaption>Healthy flowers begin long before the harvest.</figcaption></figure>
    <section className="journal-section reading-column"><h2>Give back to the land</h2><p>Ecomama's approach to biodynamic and regenerative farming is to return organic matter to the ground, support diverse life, and work with seasonal growth. The rose garden is part of that wider system, alongside the orchard, grazing animals, and planted habitats.</p><p>Biodynamic preparations and compost teas are part of the farm's soil care. The work is seasonal and specific to the ground and plants, rather than a promise that every rose will flower on a particular date.</p></section>
    <section className="journal-section sustainability-spread"><div><h2>Keep the nutrients here</h2><p>Closed-loop composting starts with material already on the property. Plant trimmings, animal waste, and other organic matter become compost for the gardens and orchard. Cover crops protect the soil between growing cycles, while grazing rotation returns material to the ground.</p><p>The farm's published practices avoid pesticides, insecticides, and synthetic fertilisers. Compost, observation, and patient growing guide the work.</p></div><figure><JournalPhoto file="28-ecomamasocials-june-14.jpg" alt="Fruit trees in the farm orchard" /><figcaption>The orchard shares in the farm's compost cycle.</figcaption></figure></section>
    <section className="journal-section sustainability-spread"><figure><JournalPhoto file="41-ecomamasocials-june-9.jpg" alt="A bee visiting purple lavender flowers" /><figcaption>Flowers provide habitat for pollinators.</figcaption></figure><div><h2>Make room for other lives</h2><p>Heritage and rescued farm animals live alongside the cultivated garden. Chickens, ducks, turkeys, goats, and pigs each need care, space, and routines of their own.</p><p>Owl boxes offer nesting habitat. Flowers and planted areas support birds, bees, butterflies, and beneficial insects. These habitats make space for pollination and natural pest control within the working farm.</p><h3>Water with the season</h3><p>Drip irrigation delivers water near the roots. The farm adjusts watering around rainfall, collects rainwater, and tends natural waterways. These are practices of care, not a claim of measured water savings.</p></div></section>
    <SoilStory /><section className="journal-section reading-column"><h2>A celebration shares this ground</h2><p>Foam-free flowers, thoughtful material choices, and care for the garden connect gatherings to the work of the farm. Ask the team how your event can fit those practices.</p><Link className="journal-button" to="/contact">Ask about the farm</Link></section>
  </div>;
}
export function JournalGuide() {
  return (
    <div className="journal-page">
      <Heading
        title="A guest’s valley guide"
        description="A few places to begin when you have a morning, an afternoon, or another day in the valley."
      />
      <ValleyGuide />
    </div>
  );
}
export function JournalGatherings() {
  return (
    <div className="journal-page">
      <Heading
        title="Your people, around a table"
        description="Private dinners, celebrations, and time together on the farm. Talk with us about the gathering you have in mind."
      />
      <figure className="wide-photo">
        <JournalPhoto
          file="20-shannon-james-wedding-websize.jpg"
          alt="A dinner setting inside the Mountain View Barn"
          priority
        />
      </figure>
      <section className="journal-section reading-column">
        <h2>A gathering made for you</h2>
        <p>
          The farm has hosted dinners, birthdays, yoga, and painting retreats.
          These are examples of past gatherings, not a current workshop
          calendar. Dates, activities, and services are arranged with the team.
        </p>
        <Link className="journal-button" to="/contact">
          Discuss a private gathering
        </Link>
      </section>
      <TableStudy />
    </div>
  );
}
export function JournalServices() {
  return <div className="journal-page"><Heading title="Choose how you gather" description="A full-service estate wedding, a private sanctuary buyout, or a custom gathering. Begin with the level of support you need, then build a clear proposal together." />
    <figure className="wide-photo"><JournalPhoto file="20-shannon-james-wedding-websize.jpg" alt="A candlelit reception in the Mountain View Barn" priority /></figure>
    <section className="journal-section estate-services">
      <article><h2>Full-Service Estate Wedding Experience</h2><p>For couples who want the setting, planning, flowers, food, and design considered together. Ecomama's published offering brings its culinary team, planning and design team, floral studio, and rental collection in-house.</p><h3>Build your proposal around</h3><ul><li>Private estate ceremony and reception spaces</li><li>Planning, design, and wedding-day coordination</li><li>Estate florals shaped around the seasonal harvest</li><li>Culinary service and selections from the rental collection</li><li>Bridal Loft and Groomsmen's Cottage preparation access</li></ul><p className="content-note">Your proposal confirms the menu, floral scope, staffing, rentals, spaces, and access window. No fixed price or availability is promised here.</p><Link className="journal-button" to="/contact">Plan an estate wedding</Link></article>
      <article><h2>Private Sanctuary Buyout</h2><p>For hosts who want the estate as their setting and intend to bring their own planning team. Start with the venue-only offering and agree the division of responsibilities before booking vendors.</p><h3>Confirm together</h3><ul><li>Exclusive-use areas and preparation suite access</li><li>Your planner's role and the estate team's responsibilities</li><li>Approved vendors, catering arrangements, and insurance</li><li>Furniture, lighting, power, and rental needs</li><li>Optional estate florals and other in-house services</li></ul><p className="content-note">A buyout does not imply overnight accommodation or unrestricted access. The written agreement defines the spaces and services included.</p><Link className="journal-button" to="/contact">Discuss an estate buyout</Link></article>
      <article><h2>Custom Gatherings</h2><p>A private dinner, birthday, retreat, or time together on the farm can call for a different rhythm. Past gatherings have included yoga and painting retreats; activities are arranged by inquiry.</p><h3>Shape the gathering</h3><ul><li>A setting suited to your group size and activities</li><li>A meal, floral direction, and table plan if requested</li><li>Facilitator and supplier arrangements</li><li>Arrival, activity, and departure times</li></ul><p className="content-note">Custom gatherings are quoted individually. There is no public workshop timetable or standard retreat package.</p><Link className="journal-button" to="/contact">Tell us about your gathering</Link></article>
    </section>
    <section className="journal-section access-planning"><h2>Estate access hours, agreed in writing</h2><p>Access hours are confirmed for your date in the proposal. Before you commit, ask for the full window covering vendor arrival, setup, preparation suites, guest arrival, the end of music, and final load-out. The public information available here does not establish fixed opening hours.</p><dl><div><dt>Before guests arrive</dt><dd>Confirm delivery times, rehearsal access, setup, and when the preparation suites open.</dd></div><div><dt>During the gathering</dt><dd>Confirm the event start, meal service, music limits, and any space changes.</dd></div><div><dt>At the end of the day</dt><dd>Confirm guest departure, cleanup responsibilities, collection times, and final estate departure.</dd></div></dl><p>Share your date, guest estimate, preferred offering, and priorities. The team will clarify availability, inclusions, pricing, and the next step toward a walkthrough.</p><Link className="journal-button" to="/contact">Request a tailored proposal</Link></section><TableStudy />
  </div>;
}
export function JournalAbout() {
  return (
    <div className="journal-page">
      <Heading
        title="A farm, first"
        description="Ecomama began in 2019 with founder Tamie Posnick and a commitment to caring for the land."
      />
      <section className="journal-section field-spread">
        <figure>
          <JournalPhoto
            file="22-screenshot-2024-07-24-at-9-47-12-pm.png"
            alt="A wedding party sharing a moment in the Bridal Loft"
            priority
          />
          <figcaption>
            Guests preparing for a celebration at the farm. Estate archive.
          </figcaption>
        </figure>
        <div>
          <h2>
            Land to tend.
            <br />
            People to welcome.
          </h2>
          <p className="large-reading">
            Roses, orchard trees, and soil care came first. The estate also
            became a place where people could gather to mark the moments in
            their lives.
          </p>
          <p>
            The working farm and private gatherings share the same ground. Visit
            the garden, ask about the growing, and meet the team through a
            conversation.
          </p>
          <Link className="text-link" to="/contact">
            Meet us at the farm ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
export function JournalStory() {
  return <div className="journal-page"><Heading title="The story of Ecomama" description="In 2019, Tamie Posnick began with a piece of Santa Ynez land and a wish to care for it. The farm grew through the work of restoring the soil, planting, and learning from each season." />
    <figure className="wide-photo"><JournalPhoto file="17-dji-0658-enhanced-sr.jpg" alt="The rose garden and central lawn viewed from above" priority /><figcaption>The garden as it grew into a place for flowers and gatherings.</figcaption></figure>
    <section className="journal-section story-chapter"><span className="story-date">2019</span><div><h2>First, hands in the dirt</h2><p className="large-reading">The property was wild and untamed when Tamie found it. Its room for growth became the starting point for a biodynamic farm, with the relationship between farmer and soil at the centre.</p><p>Restoring the land meant attending to what would sustain it. Planting roses and orchard trees went alongside water management, composting, and places for wildlife. The work asked for time before it could offer flowers.</p></div></section>
    <section className="journal-section field-spread"><figure><JournalPhoto file="35-the-laras-sb1-87.jpg" alt="A garden path framed by climbing roses" /><figcaption>Growth measured in seasons.</figcaption></figure><div><h2>A garden takes shape</h2><p className="large-reading">The years that followed brought a larger rose garden, fruit trees, olives, and a closed-loop compost area to feed the ground again.</p><p>The farm's earlier story records a garden of more than 1,500 plants. Today, more than 2,500 heirloom and David Austin rose bushes grow here. That growth sits alongside the less visible work of tending soil, managing water, and caring for animals.</p><p>Structures and gathering spaces developed within the working estate. The roses remained part of the daily life of the farm, from growing through the season to the dawn harvest.</p></div></section>
    <section className="journal-section field-spread"><div><h2>A place to share</h2><p>Weddings and private gatherings brought another kind of life to the garden. Couples exchange vows among the roses, guests sit down together at long tables, and the barns make room for the evening.</p><p>The flowers give these days a connection to the place they happen. A bouquet begins here in the soil; its colours and shapes reflect what the garden can offer that season.</p><Link className="text-link" to="/venue">Explore the estate today</Link></div><figure><JournalPhoto file="18-sb5-52.jpg" alt="Guests' tables set for a celebration on the lawn" /><figcaption>The working farm makes room for celebration.</figcaption></figure></section>
    <section className="journal-section reading-column"><h2>The next season</h2><p>Ecomama's published ambitions include sharing biodynamic practices more widely, expanding its floral offerings, and building relationships with organic and regenerative growers. The work of caring for this ground continues with each season.</p><Link className="journal-button" to="/sustainability">Read about our growing practices</Link></section>
  </div>;
}
export function JournalExplore() {
  return (
    <div className="journal-page">
      <Heading
        title="Spend some time here"
        description="Follow your curiosity through the garden, across the estate, and into the valley."
      />
      <section className="journal-section journal-index">
        <Link to="/vignettes">
          <span>Walk the estate</span>
          <p>Choose a place and look closer.</p>
          <span>↗</span>
        </Link>
        <Link to="/floral">
          <span>The rose year</span>
          <p>Gather colour and flower references.</p>
          <span>↗</span>
        </Link>
        <Link to="/local-recommendations">
          <span>The valley guide</span>
          <p>Useful links for the rest of your visit.</p>
          <span>↗</span>
        </Link>
      </section>
    </div>
  );
}
export function JournalPartners() {
  return (
    <div className="journal-page">
      <Heading
        title="Work with the farm"
        description="For planners, floral designers, chefs, and others who help bring a gathering together."
      />
      <section className="journal-section reading-column">
        <h2>Begin with a conversation</h2>
        <p>
          Tell us about your work, the gathering you are planning, and the role
          you have in mind. The team can confirm access, facilities, and the
          requirements for working on the estate.
        </p>
        <Link className="journal-button" to="/contact">
          Introduce yourself
        </Link>
      </section>
    </div>
  );
}
