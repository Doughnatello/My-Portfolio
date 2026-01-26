-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  tech_stack TEXT[],
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create skills table
CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  proficiency INTEGER DEFAULT 80,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

-- Public read policies for portfolio content
CREATE POLICY "Anyone can view projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Anyone can view skills" ON public.skills FOR SELECT USING (true);

-- Anyone can submit contact messages
CREATE POLICY "Anyone can submit contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Insert sample projects
INSERT INTO public.projects (title, description, tech_stack, featured) VALUES
('Neural Network Visualizer', 'Interactive 3D visualization of neural network architectures with real-time training animations', ARRAY['React', 'Three.js', 'TensorFlow.js', 'WebGL'], true),
('Quantum Data Encryption', 'Post-quantum cryptography implementation for secure data transmission', ARRAY['Rust', 'Python', 'WebAssembly', 'Node.js'], true),
('AI Code Assistant', 'Machine learning powered code completion and refactoring tool', ARRAY['TypeScript', 'GPT-4', 'VS Code API', 'Electron'], true),
('Blockchain Analytics', 'Real-time blockchain transaction analysis and visualization dashboard', ARRAY['React', 'D3.js', 'Go', 'PostgreSQL'], false),
('IoT Smart Home Hub', 'Centralized control system for IoT devices with voice recognition', ARRAY['Python', 'React Native', 'MQTT', 'TensorFlow'], false),
('Cybersecurity Scanner', 'Automated vulnerability detection and penetration testing framework', ARRAY['Python', 'Kali Linux', 'Docker', 'Redis'], false);

-- Insert sample skills
INSERT INTO public.skills (name, category, proficiency, icon) VALUES
('React', 'Frontend', 95, 'Code'),
('TypeScript', 'Languages', 92, 'Code'),
('Node.js', 'Backend', 88, 'Server'),
('Python', 'Languages', 90, 'Code'),
('PostgreSQL', 'Database', 85, 'Database'),
('Docker', 'DevOps', 82, 'Container'),
('AWS', 'Cloud', 80, 'Cloud'),
('TensorFlow', 'AI/ML', 78, 'Brain'),
('GraphQL', 'API', 85, 'Network'),
('Kubernetes', 'DevOps', 75, 'Container');

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, published) VALUES
('The Future of Quantum Computing', 'future-quantum-computing', 'Exploring how quantum supremacy will revolutionize cryptography and AI', 'Full article content here...', true),
('Building Scalable Microservices', 'scalable-microservices', 'Architecture patterns for high-performance distributed systems', 'Full article content here...', true),
('Neural Networks Demystified', 'neural-networks-demystified', 'A deep dive into the mathematics behind deep learning', 'Full article content here...', true);