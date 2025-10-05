import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiRequests } from "../../lib/api_request_methods";
import type { CastMember } from "../../types/cast_member";

import Spinner from "../partials/spinner";

export default function PeoplePageDetail() {
  const params = useParams<{ id: string }>();
  const id = params.id ? parseInt(params.id) : NaN;
  const [people, setPeople] = useState<CastMember | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const peopleRes = await ApiRequests.get().get_cast_member(id);
      if (peopleRes) {
        setPeople(peopleRes);
      } else {
        window.location.href = "not_found";
      }
    };
    fetchPeople();
  }, [id]);

  return people ? (
    <div>
      <h1>{people.name}</h1>
    </div>
  ) : (
    <Spinner size={80} />
  );
}
