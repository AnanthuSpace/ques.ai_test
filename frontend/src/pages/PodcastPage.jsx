import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import LogoutIcone from "../components/LogoutIcone";

const PodcastPage = () => {
    const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false);
  const [originalTranscript, setOriginalTranscript] = useState(`

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.`);
  const [transcript, setTranscript] = useState(originalTranscript);

  const handleToggleEdit = () => {
    if (isEditing) {
      setOriginalTranscript(transcript); 
    }
    setIsEditing(!isEditing);
  };

  const handleDiscard = () => {
    setTranscript(originalTranscript);
    setIsEditing(false);
  };

  const handleChange = (e) => setTranscript(e.target.value);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 p-7 overflow-auto">
        <header className="flex items-center justify-between px-6 py-4">
          <Breadcrumbs projectName="Sample Project" />
          <LogoutIcone/>
        </header>

        <main className="flex-1 overflow-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center" onClick={()=> navigate(-1)}>
              <button className="mr-2">
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-xl font-bold">Edit Transcript</h1>
            </div>

            {isEditing ? (
              <div className="flex space-x-2">
                <button
                  onClick={handleDiscard}
                  className="bg-white text-gray-800 px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-gray-400 transition"
                >
                  Discard
                </button>
                <button
                  onClick={handleToggleEdit}
                  className="bg-[#1D1A2F] text-white px-6 py-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={handleToggleEdit}
                className="bg-[#1D1A2F] text-white px-6 py-2 rounded"
              >
                Edit
              </button>
            )}
          </div>

          {/* Transcript Container */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mx-6 mb-6">
            <h1 className="main-text font-bold">Speaker</h1>
            {isEditing ? (
              <textarea
                value={transcript}
                onChange={handleChange}
                rows={12}
                className="w-full  rounded p-3 text-sm text-gray-700"
              />
            ) : (
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {transcript.split(/\n\n+/).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PodcastPage;
