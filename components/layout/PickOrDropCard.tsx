import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const DropOffSelector = ({ title = "Pick-up" }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* Radio Group */}
      <RadioGroup defaultValue="drop-off" className="mb-4 flex items-center">
        <RadioGroupItem value="drop-off" id="drop-off" />
        <label
          htmlFor="drop-off"
          className="ml-2 text-sm font-medium text-gray-800"
        >
          {title}
        </label>
      </RadioGroup>

      {/* Dropdown Section */}
      <div className="flex items-center space-x-8">
        {/* Location Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-800">
            Locations
          </label>
          <Select>
            <SelectTrigger className="w-48">
              <span>Select your city</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="san-francisco">San Francisco</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-800">
            Date
          </label>
          <Select>
            <SelectTrigger className="w-48">
              <span>Select your date</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-12-01">December 1, 2024</SelectItem>
              <SelectItem value="2024-12-02">December 2, 2024</SelectItem>
              <SelectItem value="2024-12-03">December 3, 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Time Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-800">
            Time
          </label>
          <Select>
            <SelectTrigger className="w-48">
              <span>Select your time</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning</SelectItem>
              <SelectItem value="afternoon">Afternoon</SelectItem>
              <SelectItem value="evening">Evening</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default DropOffSelector;
