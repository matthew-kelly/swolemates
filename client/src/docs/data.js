import chroma from 'chroma-js';

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

export const tagOptions = [
        { value: 'back', label: 'Back', color: '#00B8D9'},
        { value: 'biceps', label: 'Biceps', color: '#FF8B00'},
        { value: 'calisthenics', label: 'Calisthenics', color: '#5243AA'},
        { value: 'cardio', label: 'Cardio', color: '#00875A'},
        { value: 'chest', label: 'Chest', color: '#FF5630'},
        { value: 'core', label: 'Core', color: '#FFC400'},
        { value: 'hIT', label: 'HIT', color: '#253858'},
        { value: 'legs', label: 'Legs', color: '#e424de'},
        { value: 'oRM', label: 'ORM', color: '#6d6fc3'},
        { value: 'shoulders', label: 'Shoulders', color: '#1dd2c1'},
        { value: 'sprints', label: 'Sprints', color: '#e84b85'},
        { value: 'stretching', label: 'Stretching', color: '#7fb378'},
        { value: 'traps', label: 'Traps', color: '#929292'},
        { value: 'triceps', label: 'Triceps', color: '#017eff'},
        { value: 'yoga', label: 'Yoga', color: '#d5da82'}
      ]
