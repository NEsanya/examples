const { ThreeJsMap, GuidesLoader, NeuroAd } = requrie("neuro-core").load_components()
const { useState } = require("react")


const App = () => {
  const [advert, setAdvert] = useState(null)
  const [guide, setGuide] = useState(GudesLoader.default_guid())

  NeuroAd.on_advert_change(setAdvert)
  GuidesLoader.on_guides_load(setGuide)

  return (
    <div>
      <ThreeJSMap />
      <GuidesLoader.ShowGuide guide={guide} />

      {advert &&
       <NeuroAd.ShowAdvert advert={advert} />
      }
    </div>
  )
}
