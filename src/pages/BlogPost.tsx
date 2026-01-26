import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (!error && data) {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-muted/50 rounded w-3/4 mb-4" />
            <div className="h-4 bg-muted/50 rounded w-1/4 mb-8" />
            <div className="h-64 bg-muted/50 rounded mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-muted/50 rounded" />
              <div className="h-4 bg-muted/50 rounded" />
              <div className="h-4 bg-muted/50 rounded w-2/3" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="font-body text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-primary"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Header */}
            <header className="mb-12">
              {/* Meta */}
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">
                    {format(new Date(post.created_at), "MMMM d, yyyy")}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono text-sm">5 min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* Cover Image */}
            <div className="h-64 md:h-96 rounded-2xl bg-gradient-to-br from-primary/20 via-muted to-secondary/20 mb-12 flex items-center justify-center overflow-hidden gradient-border">
              <div className="text-[200px] font-display text-primary/20">
                {post.title.charAt(0)}
              </div>
            </div>

            {/* Content */}
            <GlowCard variant="neon" className="mb-12">
              <div className="prose prose-invert prose-lg max-w-none font-body">
                <p className="text-foreground leading-relaxed">{post.content}</p>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  This is a sample blog post. The full content would be rendered here
                  with proper formatting, code blocks, images, and more.
                </p>
              </div>
            </GlowCard>

            {/* Share */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <span className="font-display text-lg text-foreground">
                Share this article
              </span>
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <Share2 className="mr-2 w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
