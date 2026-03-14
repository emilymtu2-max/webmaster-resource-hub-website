
"use client"

import React from "react"

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-base-200 p-8">

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Immigration Data</h1>
        <p className="text-base-content/70 mt-2">
          An overview of why our aid to immigrants is so critical
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Current Immigration from Asia to US:</div>
          <div className="stat-value text-primary">Accounts for 31% of all 47.8 million foreign-born residents as of 2023</div>
          
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Resources Submitted</div>
          <div className="stat-value text-secondary">1,320</div>
          <div className="stat-desc">+120 this week</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Monthly Visitors</div>
          <div className="stat-value text-accent">54K</div>
          <div className="stat-desc">↗︎ 6% growth</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Active Contributors</div>
          <div className="stat-value">320</div>
          <div className="stat-desc">community members</div>
        </div>

      </div>

      {/* Secondary Stats Row */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-12">

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Resources Approved</h2>
            <p className="text-3xl font-bold">980</p>
            <p className="text-base-content/60">After moderation review</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Countries Reached</h2>
            <p className="text-3xl font-bold">42</p>
            <p className="text-base-content/60">Global users</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Total Page Views</h2>
            <p className="text-3xl font-bold">312K</p>
            <p className="text-base-content/60">All time traffic</p>
          </div>
        </div>

      </div>

      {/* Activity Table */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">Recent Activity</h2>

          <div className="overflow-x-auto">
            <table className="table">

              <thead>
                <tr>
                  <th>User</th>
                  <th>Action</th>
                  <th>Resource</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Maria L.</td>
                  <td>Submitted</td>
                  <td>Immigration Legal Aid Guide</td>
                  <td>2 hours ago</td>
                </tr>

                <tr>
                  <td>Ahmed K.</td>
                  <td>Approved</td>
                  <td>Job Training Resource</td>
                  <td>5 hours ago</td>
                </tr>

                <tr>
                  <td>Sofia R.</td>
                  <td>Submitted</td>
                  <td>Community Health Clinics</td>
                  <td>Yesterday</td>
                </tr>

                <tr>
                  <td>Daniel W.</td>
                  <td>Approved</td>
                  <td>Scholarship Database</td>
                  <td>Yesterday</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
