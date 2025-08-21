
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Eye, Copy, Clock, Wand2 } from "lucide-react";
import { PageBuilder } from "@/components/PageBuilder/PageBuilder";
import { PageData } from "@/types/pageBuilder";

interface LandingPage {
  id: string;
  title: string;
  description: string;
  url: string;
  views: number;
  conversions: number;
  status: "active" | "draft" | "scheduled";
  createdAt: string;
  scheduledStart?: string;
  scheduledEnd?: string;
  pageData?: PageData;
}

const mockLandingPages: LandingPage[] = [
  {
    id: "1",
    title: "Combo da Semana",
    description: "2 hambúrgueres + batata + refrigerante por apenas R$ 35,90",
    url: "combo-da-semana",
    views: 1250,
    conversions: 45,
    status: "active",
    createdAt: "2024-06-10"
  },
  {
    id: "2",
    title: "Desconto Relâmpago",
    description: "50% OFF em todos os lanches até meia-noite",
    url: "desconto-relampago",
    views: 890,
    conversions: 32,
    status: "scheduled",
    createdAt: "2024-06-12",
    scheduledStart: "2024-06-15 18:00",
    scheduledEnd: "2024-06-15 23:59"
  },
  {
    id: "3",
    title: "Novo Hambúrguer Gourmet",
    description: "Conheça nosso novo hambúrguer artesanal",
    url: "novo-hamburguer-gourmet",
    views: 456,
    conversions: 18,
    status: "draft",
    createdAt: "2024-06-11"
  }
];

export default function LandingPages() {
  const [landingPages] = useState<LandingPage[]>(mockLandingPages);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentView, setCurrentView] = useState<'list' | 'builder'>('list');
  const [editingPage, setEditingPage] = useState<LandingPage | null>(null);

  const filteredPages = landingPages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Ativa";
      case "draft":
        return "Rascunho";
      case "scheduled":
        return "Agendada";
      default:
        return status;
    }
  };

  const handleCreateNew = () => {
    setEditingPage(null);
    setCurrentView('builder');
  };

  const handleEditPage = (page: LandingPage) => {
    setEditingPage(page);
    setCurrentView('builder');
  };

  const handleSavePage = (pageData: PageData) => {
    console.log('Salvando página:', pageData);
    // Aqui você salvaria no Supabase
    setCurrentView('list');
  };

  if (currentView === 'builder') {
    return (
      <PageBuilder
        initialData={editingPage?.pageData}
        onSave={handleSavePage}
      />
    );
  }

  return (
    <div className="flex-1 space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Landing Pages</h1>
          <p className="text-gray-600 mt-1">Crie páginas promocionais com nosso construtor visual e IA</p>
        </div>
        <Button onClick={handleCreateNew} className="mt-4 md:mt-0 gradient-brand text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Landing Page
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar landing pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Todas</Button>
          <Button variant="outline">Ativas</Button>
          <Button variant="outline">Rascunhos</Button>
          <Button variant="outline">Agendadas</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPages.map((page) => (
          <Card key={page.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg text-brand-dark">{page.title}</CardTitle>
                  <Badge className={`mt-2 ${getStatusColor(page.status)}`}>
                    {page.status === "scheduled" && <Clock className="w-3 h-3 mr-1" />}
                    {getStatusText(page.status)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{page.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Visualizações:</span>
                  <span className="font-medium">{page.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Conversões:</span>
                  <span className="font-medium text-green-600">{page.conversions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Taxa de Conversão:</span>
                  <span className="font-medium">
                    {((page.conversions / page.views) * 100).toFixed(1)}%
                  </span>
                </div>
                
                {page.status === "scheduled" && page.scheduledStart && (
                  <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    Agendada para: {new Date(page.scheduledStart).toLocaleString('pt-BR')}
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-3 h-3 mr-1" />
                  Ver
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleEditPage(page)}>
                  <Edit className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="outline">
                  <Copy className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
