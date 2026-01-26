import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  created_at: string;
}

export const LatestPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Blog"
          title="Latest Articles"
          description="Thoughts on technology, development practices, and the future of web."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {loading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <GlowCard key={i} className="h-64 animate-pulse">
                    <div className="h-4 bg-muted/50 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-muted/50 rounded w-full mb-2" />
                    <div className="h-4 bg-muted/50 rounded w-2/3" />
                  </GlowCard>
                ))
            : posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <GlowCard className="h-full group cursor-pointer">
                    {/* Date */}
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-xs">
                          {format(new Date(post.created_at), "MMM d, yyyy")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-mono text-xs">5 min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-body text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center text-primary font-display text-sm group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </GlowCard>
                </Link>
              ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-display tracking-wider border-primary/50 text-primary hover:bg-primary/10 group"
          >
            <Link to="/blog">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
