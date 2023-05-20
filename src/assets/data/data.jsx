/* eslint-disable max-len */
export const dropdownArrays = [
  {value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Zero'},
  {value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], label: 'Ones'},
  {value: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], label: 'Kamm'},
  {
    value: [
      0, 0.3826834323650898, 0.7071067811865475, 0.9238795325112867, 1, 0.9238795325112867, 0.7071067811865476, 0.3826834323650899, 0, -0.3826834323650898,
      -0.7071067811865475, -0.9238795325112867, -1, -0.9238795325112867, -0.7071067811865476, -0.3826834323650899,
    ],
    label: 'Sinus',
  },
];

export const initialArrays = {
  baseArray: [...dropdownArrays.find(({label}) => label === 'Sinus').value],
  zeros: [...dropdownArrays.find(({label}) => label === 'Zero').value],
};
