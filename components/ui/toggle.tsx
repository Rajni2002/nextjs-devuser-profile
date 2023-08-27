import ToggleProps from '@/interfaces/props/toggle';

const Toggle = ({
    state,
    clickHandler
}: ToggleProps) => (
    <label className="relative cursor-pointer">
        <input type="checkbox" readOnly className="sr-only peer" checked={state} />
        <div
            onClick={clickHandler}
            className="w-11 h-6 bg-gray-200 
                rounded-full peer  peer-focus:ring-[#4F46E5]
                peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-0.5
                after:left-[2px] after:bg-white after:border-gray-300 
                after:border after:rounded-full after:h-5 after:w-5 
                after:transition-all peer-checked:bg-[#4F46E5]"></div>
    </label>
);

export default Toggle;
