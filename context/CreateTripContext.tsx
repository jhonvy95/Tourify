import { createContext, ReactElement, useState, Dispatch, SetStateAction } from "react";

// Define the shape of your context value
interface TripContextType {
  tripData: any[];
  setTripData: Dispatch<SetStateAction<any[]>>;
}

// Create a context with a default value
const defaultValue: TripContextType = {
  tripData: [],
  setTripData: () => {},
};

export const CreateTripContext = createContext<TripContextType>(defaultValue);

interface ChildrenType {
  children: ReactElement | ReactElement[];
}

export const CreateTripProvider = ({ children }: ChildrenType) => {
  const [tripData, setTripData] = useState<any[]>([]);

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </CreateTripContext.Provider>
  );
};
