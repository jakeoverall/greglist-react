export function BindEditable(editable) {
  return () => {
    const target = window.event.target;
    // @ts-ignore
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // @ts-ignore
    const name = target.name;
    editable[name] = value
  }
}