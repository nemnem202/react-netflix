import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiRequests } from "../../lib/api_request_methods";

import Spinner from "../partials/spinner";

import "../styles/pages/people.css";
import type { PeopleDetail } from "../../types/people_detail";

export default function PeoplePageDetail() {
  const params = useParams<{ id: string }>();
  const id = params.id ? parseInt(params.id) : NaN;
  const [people, setPeople] = useState<PeopleDetail | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const peopleRes = await ApiRequests.get().get_cast_member(id);
      if (peopleRes) {
        setPeople(peopleRes);
        console.log(peopleRes);
      } else {
        window.location.href = "not_found";
      }
    };
    fetchPeople();
  }, [id]);

  return (
    <div className="people_page">
      {people ? (
        <>
          <div className="people_header">
            <img
              className="people_photo"
              src={ApiRequests.get_img_url_from_path(people.profile_path)}
              alt={people.name}
            />

            <div className="people_info">
              <h1 className="people_name">{people.name}</h1>

              {people.biography !== "" && <p className="people_biography">{people.biography}</p>}

              <p className="people_department">Department: {people.known_for_department}</p>

              {people.birthday && (
                <p className="people_birth">
                  Born: {people.birthday}
                  {people.place_of_birth ? ` in ${people.place_of_birth}` : ""}
                </p>
              )}

              {people.deathday && <p className="people_death">Died: {people.deathday}</p>}

              {people.homepage && (
                <p className="people_homepage">
                  <a href={people.homepage} target="_blank" rel="noreferrer">
                    Official Website
                  </a>
                </p>
              )}

              {people.imdb_id && (
                <p className="people_imdb">
                  <a
                    href={`https://www.imdb.com/name/${people.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    IMDb Profile
                  </a>
                </p>
              )}

              {people.adult && <span className="adult_badge">🔞</span>}
            </div>
          </div>
        </>
      ) : (
        <Spinner size={100} />
      )}
    </div>
  );
}
