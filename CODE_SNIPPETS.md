# 💻 Code Snippets & Examples

## Quick Reference Guide

---

## 🎨 Animation Examples

### Using Fade-In Animation
```jsx
<div className="animate-fade-in">
  Content fades in smoothly
</div>

<div className="animate-fade-in-delay">
  Fades in with 0.3s delay
</div>

<div className="animate-fade-in-delay-2">
  Fades in with 0.6s delay
</div>
```

### Using Slide Animations
```jsx
<div className="animate-slide-up">
  Content slides up when page loads
</div>

<div className="animate-slide-in-left">
  Slides in from the left side
</div>

<div className="animate-slide-in-right">
  Slides in from the right side
</div>
```

### Using Transform Effects
```jsx
<div className="transform hover:scale-105 transition-transform duration-300">
  Scales up on hover
</div>

<div className="hover:translate-x-1 transition-transform duration-300">
  Moves right on hover
</div>
```

---

## 🎯 Button Styles

### Primary Gradient Button
```jsx
<button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 
  hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg 
  transition-all duration-300 transform hover:scale-105 active:scale-95">
  Click Me
</button>
```

### Secondary Outline Button
```jsx
<button className="px-8 py-3 bg-transparent border-2 border-teal-500 
  text-teal-400 hover:text-white hover:bg-teal-500 font-semibold rounded-lg 
  transition-all duration-300 transform hover:scale-105">
  Outline Button
</button>
```

### Icon Button with Glow
```jsx
<button className="w-14 h-14 flex items-center justify-center rounded-full 
  bg-gray-800/50 border border-teal-500/20 text-teal-400 
  transition-all duration-300 transform hover:scale-110 group
  relative overflow-hidden">
  <span className="absolute inset-0 bg-teal-500 scale-0 
    group-hover:scale-100 transition-transform duration-300 -z-10"></span>
  <Icon className="relative z-10 group-hover:text-white" />
</button>
```

---

## 📋 Card Styles

### Basic Card with Hover
```jsx
<div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 
  rounded-lg p-6 hover:border-teal-500/40 hover:shadow-xl 
  hover:shadow-teal-500/10 transition-all duration-300 
  transform hover:scale-105">
  Card content here
</div>
```

### Expandable Card
```jsx
<button onClick={() => setExpanded(!expanded)}
  className="w-full text-left bg-gray-800/50 border border-teal-500/20 
  rounded-lg p-6 hover:border-teal-500/40 transition-all duration-300 group">
  <h3 className="font-bold text-white group-hover:text-teal-400">
    Click to expand
  </h3>
  
  <div className={`mt-4 overflow-hidden transition-all duration-300 
    ${expanded ? 'max-h-96' : 'max-h-0'}`}>
    Expandable content here
  </div>
</button>
```

---

## 🔍 Search Input Style
```jsx
<div className="relative group">
  <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 
    text-teal-400" />
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-teal-500/20 
      rounded-lg text-white placeholder-gray-500 focus:outline-none 
      focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 
      transition-all duration-300"
    placeholder="Search..."
  />
</div>
```

---

## 📊 Progress Bar Style
```jsx
<div className="space-y-2">
  <div className="flex justify-between items-center">
    <span className="text-gray-300">Skill Name</span>
    <span className="text-teal-400 font-semibold">85%</span>
  </div>
  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 
        rounded-full transition-all duration-1000 ease-out shadow-glow"
      style={{ width: '85%' }}
    ></div>
  </div>
</div>
```

---

## 🎪 Timeline Style
```jsx
<div className="space-y-6 relative">
  {/* Timeline line */}
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b 
    from-teal-500 to-cyan-500 opacity-30 hidden md:block ml-6"></div>

  {items.map((item, index) => (
    <div key={index} className="md:ml-16 bg-gray-800/50 border border-teal-500/20 
      rounded-lg p-6 relative group">
      {/* Timeline dot */}
      <div className="absolute -left-8 top-8 hidden md:block">
        <div className="w-4 h-4 bg-teal-500 rounded-full border-4 
          border-gray-900 shadow-lg group-hover:shadow-glow 
          transition-all duration-300"></div>
      </div>
      
      Content here
    </div>
  ))}
</div>
```

---

## 🔄 State Management Examples

### Search Filter Implementation
```jsx
const [searchTerm, setSearchTerm] = useState('');

const filteredItems = useMemo(() => {
  return items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [searchTerm, items]);
```

### Category Filter Implementation
```jsx
const [activeCategory, setActiveCategory] = useState('all');

const filteredItems = useMemo(() => {
  return items.filter(item => {
    const matchesCategory = activeCategory === 'all' || 
      item.category === activeCategory;
    return matchesCategory;
  });
}, [activeCategory, items]);
```

### Expandable Section
```jsx
const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

const toggleCategory = (title: string) => {
  setExpandedCategory(expandedCategory === title ? null : title);
};

// In JSX:
<button onClick={() => toggleCategory('Skills')}>
  Skills
</button>

<div className={`overflow-hidden transition-all duration-300 
  ${expandedCategory === 'Skills' ? 'max-h-96' : 'max-h-0'}`}>
  Skills content
</div>
```

---

## 🎯 Form Handling

### Basic Form with Validation
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
  setFormData({ name: '', email: '', message: '' });
};

// In JSX:
<form onSubmit={handleSubmit} className="space-y-6">
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  {/* More fields... */}
</form>
```

### Success Message
```jsx
const [showSuccess, setShowSuccess] = useState(false);

// After successful submission:
setShowSuccess(true);
setTimeout(() => setShowSuccess(false), 5000);

// In JSX:
{showSuccess && (
  <div className="p-4 bg-green-500/20 border border-green-500/50 
    rounded-lg flex items-center gap-3 animate-fade-in">
    <CheckIcon className="w-5 h-5 text-green-400" />
    <span className="text-green-400">Success message!</span>
  </div>
)}
```

---

## 🌟 Hover Effects

### Scale on Hover
```jsx
<div className="transform hover:scale-105 transition-transform duration-300">
  Scales to 105% on hover
</div>
```

### Color Change on Hover
```jsx
<div className="text-teal-400 hover:text-cyan-400 transition-colors duration-300">
  Color changes on hover
</div>
```

### Shadow Glow on Hover
```jsx
<div className="hover:shadow-glow transition-shadow duration-300">
  Gets glowing shadow on hover
</div>
```

### Combined Effects
```jsx
<div className="bg-gray-800 text-teal-400 rounded-lg p-4
  hover:bg-gray-700 hover:text-cyan-400 hover:shadow-lg
  hover:shadow-teal-500/30 transition-all duration-300
  transform hover:scale-105">
  Multiple hover effects
</div>
```

---

## 🎨 Text Styles

### Gradient Text
```jsx
<h1 className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 
  bg-clip-text text-transparent">
  Gradient heading text
</h1>
```

### Glowing Text
```jsx
<h2 className="text-white text-glow">
  Text with glow effect
</h2>
```

### Styled Heading
```jsx
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
  Part 1 <span className="text-teal-400">Part 2</span>
</h1>
```

---

## 🔧 Utility Classes

### Backdrop Blur
```jsx
<div className="backdrop-blur-sm bg-black/30">
  Content with blurred background behind
</div>
```

### Border with Gradient
```jsx
<div className="border border-teal-500/20 hover:border-teal-500/50 
  transition-colors duration-300">
  Card with hover border color
</div>
```

### Glass Morphism
```jsx
<div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 
  rounded-lg">
  Glass morphism card
</div>
```

---

## 🎪 Animation Delays

### Staggered Animation
```jsx
{items.map((item, index) => (
  <div
    key={index}
    className="animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {item}
  </div>
))}
```

### Predefined Delays
```jsx
<div className="animate-fade-in">Delay: 0s</div>
<div className="animate-fade-in-delay">Delay: 0.3s</div>
<div className="animate-fade-in-delay-2">Delay: 0.6s</div>
<div className="animate-fade-in-delay-3">Delay: 0.9s</div>
<div className="animate-fade-in-delay-4">Delay: 1.2s</div>
```

---

## 📱 Responsive Classes

### Mobile-First
```jsx
<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive text size
</div>
```

### Grid Responsive
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Hidden on Mobile
```jsx
<div className="hidden md:block">
  Only shows on medium screens and up
</div>
```

---

## 🎯 Complete Component Example

### Animated Card Component
```jsx
export const AnimatedCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 
      rounded-lg p-6 hover:border-teal-500/40 hover:shadow-xl 
      hover:shadow-teal-500/10 transition-all duration-300 
      transform hover:scale-105 group cursor-pointer">
      
      <div className="flex items-center gap-4 mb-4">
        <Icon className="text-teal-400 text-3xl group-hover:scale-110 
          transition-transform duration-300" />
        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 
          transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-300 group-hover:text-gray-200 
        transition-colors duration-300">
        {description}
      </p>
      
      <div className="mt-4 flex items-center text-teal-400 
        group-hover:text-cyan-400 transition-colors duration-300">
        Learn more <span className="ml-2 group-hover:translate-x-1 
          transition-transform duration-300">→</span>
      </div>
    </div>
  );
};
```

---

## 🚀 Performance Tips

### Use useMemo for Expensive Calculations
```jsx
const filteredData = useMemo(() => {
  return data.filter(/* expensive calculation */);
}, [data, filter]);
```

### Memoize Components
```jsx
export const MyComponent = React.memo(({ props }) => {
  return /* component */;
});
```

### Use CSS Animations Instead of JS
```jsx
// ✅ Good - Uses CSS
<div className="animate-fade-in" />

// ❌ Avoid - Uses JavaScript
<motion.div animate={{ opacity: 1 }} />
```

---

## 🎓 Best Practices

1. **Always use transition-all for smooth changes**
2. **Keep animation durations consistent (300ms)**
3. **Use transform and opacity for better performance**
4. **Add aria-labels for accessibility**
5. **Test on mobile devices**
6. **Use semantic HTML**
7. **Keep color contrast at AA level**

---

## 📚 Resources Used

- Tailwind CSS: https://tailwindcss.com
- React Icons: https://react-icons.github.io
- MDN Web Docs: https://developer.mozilla.org
- React Official: https://react.dev

---

**Happy Coding!** 🎉
