"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Vendor {
  id: string;
  companyName: string;
}

function ProductForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [categories, setCategories] = useState<Category[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    originalPrice: "",
    image: "",
    description: "",
    inStock: true,
    badge: "",
    specs: "",
    categoryId: "",
    vendorId: "",
    rating: "0",
    reviews: "0",
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/categories").then((r) => r.json()),
      fetch("/api/vendors").then((r) => r.json()),
    ]).then(([cats, vends]) => {
      setCategories(cats);
      setVendors(vends);
    });

    if (editId) {
      fetch(`/api/products/${editId}`)
        .then((r) => r.json())
        .then((product) => {
          setForm({
            name: product.name,
            brand: product.brand,
            price: String(product.price),
            originalPrice: product.originalPrice
              ? String(product.originalPrice)
              : "",
            image: product.image,
            description: product.description,
            inStock: product.inStock,
            badge: product.badge || "",
            specs: product.specs || "{}",
            categoryId: product.categoryId,
            vendorId: product.vendorId || "",
            rating: String(product.rating),
            reviews: String(product.reviews),
          });
        });
    }
  }, [editId]);

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const url = editId ? `/api/products/${editId}` : "/api/products";
    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    router.push("/admin/products");
  };

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/admin/products"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 mb-3"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
        <h1 className="text-2xl font-bold text-dark">
          {editId ? "Edit Product" : "Add New Product"}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                placeholder="e.g., Waaree 545W Mono PERC Solar Panel"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand *
                </label>
                <input
                  required
                  value={form.brand}
                  onChange={(e) => update("brand", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                  placeholder="e.g., Waaree"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Badge
                </label>
                <input
                  value={form.badge}
                  onChange={(e) => update("badge", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                  placeholder="e.g., Best Seller, New, Premium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (INR) *
                </label>
                <input
                  required
                  type="number"
                  value={form.price}
                  onChange={(e) => update("price", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                  placeholder="14500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Original Price
                </label>
                <input
                  type="number"
                  value={form.originalPrice}
                  onChange={(e) => update("originalPrice", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                  placeholder="16800"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  required
                  value={form.categoryId}
                  onChange={(e) => update("categoryId", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vendor
                </label>
                <select
                  value={form.vendorId}
                  onChange={(e) => update("vendorId", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                >
                  <option value="">Select vendor</option>
                  {vendors.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.companyName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                value={form.image}
                onChange={(e) => update("image", e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.inStock}
                onChange={(e) => update("inStock", e.target.checked)}
                className="accent-orange-500"
              />
              <label className="text-sm text-gray-700">In Stock</label>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm resize-none"
                placeholder="Product description..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specifications (JSON)
              </label>
              <textarea
                rows={6}
                value={form.specs}
                onChange={(e) => update("specs", e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm font-mono resize-none"
                placeholder='{"Wattage": "545W", "Type": "Mono PERC"}'
              />
              <p className="text-xs text-gray-400 mt-1">
                Enter specifications as JSON key-value pairs
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={form.rating}
                  onChange={(e) => update("rating", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reviews Count
                </label>
                <input
                  type="number"
                  value={form.reviews}
                  onChange={(e) => update("reviews", e.target.value)}
                  className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {form.image && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preview
                </label>
                <img
                  src={form.image}
                  alt="Preview"
                  className="w-32 h-32 rounded-lg object-cover border"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t flex items-center justify-end gap-3">
          <Link
            href="/admin/products"
            className="px-4 py-2.5 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : editId ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function NewProductPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
        </div>
      }
    >
      <ProductForm />
    </Suspense>
  );
}
