import React from "react";
import Bird from "./Bird";

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <Bird
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_%28cropped%29.jpg/1200px-Alcedo_atthis_-England-8_%28cropped%29.jpg"
        name="Kingfisher"
      />
      <Bird
        image="https://i.ebayimg.com/00/s/MTYwMFgxMjgw/z/s6cAAOSwl2BeTtN9/$_57.JPG?set_id=8800005007"
        name="Parrot"
      />
      <Bird
        image="https://cdn.britannica.com/92/152292-050-EAF28A45/Bald-eagle.jpg"
        name="Eagle"
      />
      <Bird
        image="https://cdn.download.ams.birds.cornell.edu/api/v2/asset/221510791/900"
        name="Ostrich"
      />
      <Bird
        image="https://cdn.britannica.com/16/156416-050-909414BB/peacock-Indian-tail-feathers.jpg"
        name="Peacock"
      />
      <Bird
        image="https://abovethehimalaya.com/wp-content/uploads/2022/01/danphe.jpg"
        name="Danphe"
      />
      <Bird
        image="https://hawkwatch.org/wp-content/uploads/2023/06/GHOW-FS-1024x768.png"
        name="Owl"
      />
      <Bird
        image="https://www.aejames.com/wp-content/uploads/2019/01/Pigeon-care-Albert-E-James-and-Son-1024x683.jpg"
        name="Pigeon"
      />
    </section>
  );
};

export default App;
