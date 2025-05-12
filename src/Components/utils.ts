export interface TrackingDataProps {
  createdAt: number;
  driverName: string;
  startLongitude: string;
  startLatitude: string;
  vehicleStatus: boolean;
  endLongitude: string;
  endLatitude: string;
  vehicleType: string;
  vehicleName: string;
  distanceTotal: number;
  id: string;
}
export interface VehicleCardProps {
  title: string;
  type: string;
  longitude: string;
  latitude: string;
  status: boolean;
  active: boolean;

  onClick: () => void;
}

export interface AddressProps {
  country: string;
}
export interface RowData {
  id: string;
  name: string;
  type: string;
  distance: string;
}

export interface TableSortProps {
  data: RowData[];
}

export interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

export interface Icons {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}
