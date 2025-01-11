import "./ContactBtn.css";

export const ContactBtn = (text, url) => `
<a href=${url} class="smedia-btn" target="_blank" rel="noopener noreferrer">
  ${text}<span>.</span>
</a>
`;
