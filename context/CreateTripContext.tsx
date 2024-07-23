import { SelectTravelList } from "@/constants/options";
import { Moment } from "moment";
import { createContext, ReactElement, useState, Dispatch, SetStateAction } from "react";

interface LocationInfo {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  photoRef: string;
  url: string;
}

interface TripData {
  locationInfo?: LocationInfo;
  traveler?: SelectTravelList;
  startDate?: Moment | null;
  endDate?: Moment | null;
  totalNoOfDays?: number;
  budget?: string;
}
interface TripContextType {
  tripData: TripData;
  setTripData: Dispatch<SetStateAction<TripData>>;
}

// Create a context with a default value
const defaultValue: TripContextType = {
  tripData: {},
  setTripData: () => {},
};

export const CreateTripContext = createContext<TripContextType>(defaultValue);

interface ChildrenType {
  children: ReactElement | ReactElement[];
}

export const CreateTripProvider = ({ children }: ChildrenType) => {
  const [tripData, setTripData] = useState<TripData>({});

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </CreateTripContext.Provider>
  );
};
