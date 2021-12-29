const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data: evt } = event.params;
    const { name } = evt;
    evt.slug = slugify(name, { lower: true });
  },
  beforeUpdate(event) {
    const { data: evt } = event.params;
    const { name } = evt;
    evt.slug = slugify(name, { lower: true });
  },
};
