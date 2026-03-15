"use client"

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const COLORS = ["#EBBE27", "#FC634B", "#C27A01", "#ffc43a", "#F9AF85",]

const englishData = [
  { name: "Speaks English Well", value: 59 },
  { name: "Limited English Proficiency", value: 41 },
]

const reasonData = [
  { name: "To be with family", value: 28 },
  { name: "Economic opportunities", value: 27 },
  { name: "Educational opportunities", value: 26 },
  { name: "Conflict in home country", value: 7 },
  { name: "Other", value: 12 },
]

const immigrationData = [
  { group: "Immigrant Asian adults", minorChanges: 39, majorChanges: 59 },
  { group: "Chinese", minorChanges: 37, majorChanges: 60 },
  { group: "Filipino", minorChanges: 43, majorChanges: 56 },
  { group: "Indian", minorChanges: 29, majorChanges: 70 },
  { group: "Korean", minorChanges: 46, majorChanges: 53 },
  { group: "Vietnamese", minorChanges: 49, majorChanges: 48 },
  { group: "Other", minorChanges: 44, majorChanges: 55 },
]


const languageData = [
  { language: "Chinese", speakers: 20 },
  { language: "Hindi", speakers: 18 },
  { language: "Tagalog", speakers: 13 },
  { language: "Vietnamese", speakers: 9 },
  { language: "Korean", speakers: 7 },
]

const povertyData = [
  { group: "Burmese", rate: 19 },
  { group: "Hmong", rate: 17 },
  { group: "Asian Avg", rate: 10 },
]

const educationRecognition = [
  { status: "Recognized", value: 59 },
  { status: "Not Recognized", value: 41 },
]

export default function StatisticsPage() {
  return (
    <div className="text-[#6b2f1b]">
      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col justify-center items-start px-6 py-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8818664/pexels-photo-8818664.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
          <h1 className="text-5xl font-bold mb-4 text-white text-left">
            Supporting Asian Immigrants
          </h1>
          <p className="text-xl max-w-2xl text-left text-white">
            Accessible resources, language support, and education recognition are key to helping immigrant communities thrive in the U.S.
          </p>
        
      </div>


      {/* Main Content */}
      <div className="min-h-screen bg-base-200 p-8">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">
              Asian Immigrants in the United States
            </h2>
            <p className="text-lg">
              Why accessible resources are needed for immigrant communities
            </p>
          </div>

          {/* Statistic Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="stat bg-base-100 shadow rounded-box">
              <div className="stat-title">Asian Immigrants</div>
              <div className="stat-value">14M</div>
              <div className="stat-desc">People living in the U.S.</div>
            </div>
            <div className="stat bg-base-100 shadow rounded-box">
              <div className="stat-title">Limited English</div>
              <div className="stat-value">41%</div>
              <div className="stat-desc">Speak English less than very well</div>
            </div>
            <div className="stat bg-base-100 shadow rounded-box">
              <div className="stat-title">Language Diversity</div>
              <div className="stat-value">86%</div>
              <div className="stat-desc">Speak non-English language at home</div>
            </div>
            <div className="stat bg-base-100 shadow rounded-box">
              <div className="stat-title">Need of Financial Aid</div>
              <div className="stat-value">58%</div>
              <div className="stat-desc">Obtained financial asssistance for first 6 months</div>
            </div>
          </div>

          {/* Pie Charts Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* English Proficiency */}
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                English Proficiency Barrier
              </h3>
              <p className="mb-6">
                A large portion of Asian immigrants report limited English proficiency, which can create significant barriers to daily life and long-term success. Difficulty with English can make it challenging to navigate government systems, complete job applications, access healthcare services, enroll in education programs, or understand legal rights. Without adequate language support, immigrants may miss out on essential resources, experience social isolation, or struggle to advocate for themselves. 
              </p>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={englishData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={120}
                      label
                    >
                      {englishData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Education Recognition */}
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                Reasons for Migration
              </h3>
              <p className="mb-6">
                Many asian immigrants come to the US to advance their educational backgrounds, seek new economic opportunities, or escape persecution and conflict. Only 28% on average come to be with family, indicating that most individuals don't have pre-existing close community relationships. These individuals clearly need strong resources to support their career goals. The trend is more apparent with the most recent wave of immigrants (moved to the US in the last 10 years). 
              </p>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={reasonData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={120}
                      label
                    >
                      {reasonData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              Opinions on U.S. Immigration System
            </h3>
            <p className="mb-6">
              A majority of Asian immigrants believe the U.S. immigration system requires major or complete changes, reflecting widespread challenges they face in navigating complex visa processes, employment authorization, and residency pathways. This sentiment underscores the importance of thoughtful policy reform, as well as increased community support, resources, and advocacy to help immigrants access essential services, understand their rights, and integrate successfully into society.
            </p>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={immigrationData} layout="vertical" margin={{ left: 50 }}>
                  <XAxis type="number" />
                  <YAxis dataKey="group" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="minorChanges" stackId="a" fill="#EBBE27" name="Minor/No Changes" />
                  <Bar dataKey="majorChanges" stackId="a" fill="#F9AF85" name="Major/Complete Changes" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>


          {/* Poverty */}
          <div className="card bg-base-100 shadow-xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              Poverty Rates in Some Asian Immigrant Communities
            </h3>
            <p className="mb-6">
              Some immigrant groups experience higher poverty rates, highlighting the need for accessible employment, financial, and social support resources.
            </p>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={povertyData}>
                  <XAxis dataKey="group" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rate" fill="#FC634B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
            <div className="text-left">
            <h2 className="text-4xl font-bold mb-2">
              Information obtained from:
            </h2>
            <p className="text-lg">
              - Pew Research: https://www.pewresearch.org/race-and-ethnicity/2024/10/09/asian-american-immigrants-experiences-adjusting-to-life-in-the-u-s/
              
            </p>
            <p className="text-lg">
               - Migration Policy Institute: https://www.migrationpolicy.org/article/immigrants-asia-united-states-2025
              
            </p>

                     
          </div>


        </div>
      </div>
    </div>
  )
}
