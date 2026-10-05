import React from 'react';

const TemplatePreview = ({ templateId, templateName }) => {
  const getPreview = () => {
    switch(templateId) {
      case 'modern':
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 p-3">
            <div className="bg-white rounded-lg h-full p-3">
              <div className="h-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 w-3/4 mb-2 rounded"></div>
              <div className="h-1.5 bg-gray-300 w-full mb-1 rounded"></div>
              <div className="h-1.5 bg-gray-300 w-2/3 rounded mb-3"></div>
              <div className="flex gap-2 mt-2">
                <div className="h-1 bg-gray-200 w-1/3 rounded"></div>
                <div className="h-1 bg-gray-200 w-1/3 rounded"></div>
                <div className="h-1 bg-gray-200 w-1/3 rounded"></div>
              </div>
              <div className="mt-2 flex gap-2">
                <div className="h-8 bg-gray-100 rounded w-1/2"></div>
                <div className="h-8 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        );
      
      case 'classic':
        return (
          <div className="w-full h-full bg-gray-100 p-3">
            <div className="border-2 border-gray-800 bg-white h-full p-3">
              <div className="h-3 bg-gray-800 w-2/3 mb-2"></div>
              <div className="h-1.5 bg-gray-400 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-400 w-1/2 mb-3"></div>
              <div className="flex gap-3 mt-2">
                <div className="flex-1">
                  <div className="h-2 bg-gray-300 w-full mb-1"></div>
                  <div className="h-2 bg-gray-300 w-3/4"></div>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-300 w-full mb-1"></div>
                  <div className="h-2 bg-gray-300 w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'minimal':
        return (
          <div className="w-full h-full bg-white p-4">
            <div className="h-3 bg-gray-800 w-1/2 mb-2"></div>
            <div className="w-12 h-0.5 bg-gray-300 mb-3"></div>
            <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
            <div className="h-1.5 bg-gray-300 w-3/4 mb-3"></div>
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="h-2 bg-gray-200 w-full mb-1"></div>
                <div className="h-2 bg-gray-200 w-2/3"></div>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 w-full mb-1"></div>
                <div className="h-2 bg-gray-200 w-2/3"></div>
              </div>
            </div>
          </div>
        );
      
      case 'creative':
        return (
          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-orange-500 p-3">
            <div className="bg-white rounded-xl h-full p-3">
              <div className="flex gap-2 mb-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-2 bg-pink-500 w-3/4 mb-1 rounded"></div>
                  <div className="h-1.5 bg-gray-200 w-full rounded"></div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="flex-1 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded"></div>
                <div className="flex-1 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded"></div>
              </div>
            </div>
          </div>
        );
      
      case 'tech':
        return (
          <div className="w-full h-full bg-gray-900 p-3">
            <div className="bg-gray-800 rounded-lg h-full p-3">
              <div className="text-green-400 text-xs mb-2 font-mono">{'>'} profile</div>
              <div className="h-1.5 bg-green-500 w-3/4 mb-2 rounded"></div>
              <div className="h-1.5 bg-gray-600 w-1/2 mb-3 rounded"></div>
              <div className="space-y-1">
                <div className="h-1 bg-blue-500 w-full rounded"></div>
                <div className="h-1 bg-blue-500 w-2/3 rounded"></div>
                <div className="h-1 bg-blue-500 w-1/2 rounded"></div>
              </div>
            </div>
          </div>
        );
      
      case 'executive':
        return (
          <div className="w-full h-full bg-gray-900 p-3">
            <div className="bg-white h-full flex flex-col">
              <div className="bg-gray-800 h-10 w-full"></div>
              <div className="p-3 flex-1">
                <div className="h-2 bg-gray-800 w-2/3 mb-2"></div>
                <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
                <div className="h-1.5 bg-gray-300 w-3/4 mb-3"></div>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 bg-gray-100"></div>
                  <div className="flex-1 h-8 bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'sidebar':
        return (
          <div className="w-full h-full bg-white flex p-3 gap-2">
            <div className="w-1/3 bg-indigo-800 rounded-lg p-2">
              <div className="h-2 bg-indigo-400 w-3/4 mb-2 rounded"></div>
              <div className="h-1.5 bg-indigo-600 w-full mb-1 rounded"></div>
              <div className="h-1.5 bg-indigo-600 w-2/3 rounded"></div>
            </div>
            <div className="flex-1 p-2">
              <div className="h-2 bg-gray-800 w-3/4 mb-2"></div>
              <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-300 w-1/2"></div>
            </div>
          </div>
        );
      
      case 'twocolumn':
        return (
          <div className="w-full h-full bg-white p-3 flex gap-2">
            <div className="flex-1 bg-gray-800 p-2 rounded">
              <div className="h-2 bg-gray-600 w-3/4 mb-2"></div>
              <div className="h-1 bg-gray-600 w-full mb-1"></div>
              <div className="h-1 bg-gray-600 w-1/2"></div>
            </div>
            <div className="flex-1 bg-gray-100 p-2 rounded">
              <div className="h-2 bg-gray-600 w-3/4 mb-2"></div>
              <div className="h-1 bg-gray-400 w-full mb-1"></div>
              <div className="h-1 bg-gray-400 w-1/2"></div>
            </div>
          </div>
        );
      
      case 'card':
        return (
          <div className="w-full h-full bg-gray-100 p-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-12 rounded-t-lg"></div>
            <div className="bg-white rounded-b-lg p-2">
              <div className="h-2 bg-gray-800 w-3/4 mb-2"></div>
              <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-300 w-2/3"></div>
              <div className="flex gap-1 mt-2">
                <div className="h-1 bg-blue-200 flex-1 rounded"></div>
                <div className="h-1 bg-blue-200 flex-1 rounded"></div>
              </div>
            </div>
          </div>
        );
      
      case 'timeline':
        return (
          <div className="w-full h-full bg-white p-3">
            <div className="h-2 bg-gray-800 w-1/2 mb-3"></div>
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-teal-500"></div>
              <div className="mb-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full absolute left-[-3px]"></div>
                <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
                <div className="h-1 bg-gray-200 w-2/3"></div>
              </div>
              <div>
                <div className="w-2 h-2 bg-teal-500 rounded-full absolute left-[-3px] mt-4"></div>
                <div className="h-1.5 bg-gray-300 w-3/4"></div>
              </div>
            </div>
          </div>
        );
      
      case 'berlin':
        return (
          <div className="w-full h-full bg-white flex p-3 gap-2">
            <div className="w-1/3 bg-gray-900 rounded-lg p-2">
              <div className="h-2 bg-gray-500 w-3/4 mb-2"></div>
              <div className="h-1.5 bg-gray-700 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-700 w-2/3"></div>
            </div>
            <div className="flex-1 p-2">
              <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-300 w-3/4"></div>
              <div className="mt-2 h-8 bg-gray-100 w-full"></div>
            </div>
          </div>
        );
      
      case 'specialist':
        return (
          <div className="w-full h-full bg-white p-3">
            <div className="text-center mb-2">
              <div className="h-2 bg-gray-800 w-1/2 mx-auto mb-1"></div>
              <div className="h-1.5 bg-blue-600 w-1/3 mx-auto"></div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex-1">
                <div className="h-1 bg-gray-300 w-full mb-1"></div>
                <div className="h-1 bg-gray-300 w-2/3"></div>
              </div>
              <div className="flex-1">
                <div className="h-1 bg-gray-300 w-full mb-1"></div>
                <div className="h-1 bg-gray-300 w-2/3"></div>
              </div>
            </div>
          </div>
        );
      
      case 'santiago':
        return (
          <div className="w-full h-full bg-white p-3">
            <div className="border-b-2 border-gray-300 pb-2 mb-2">
              <div className="h-2.5 bg-gray-800 w-2/3 mb-1"></div>
              <div className="h-1.5 bg-gray-500 w-1/2"></div>
            </div>
            <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
            <div className="h-1.5 bg-gray-300 w-3/4 mb-2"></div>
            <div className="flex gap-2">
              <div className="flex-1 h-8 bg-gray-100"></div>
              <div className="flex-1 h-8 bg-gray-100"></div>
            </div>
          </div>
        );
      
      case 'london':
        return (
          <div className="w-full h-full bg-white p-3">
            <div className="text-center mb-3">
              <div className="h-2.5 bg-gray-800 w-2/3 mx-auto mb-1"></div>
              <div className="h-1 bg-gray-400 w-1/2 mx-auto"></div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
                <div className="h-1.5 bg-gray-300 w-2/3"></div>
              </div>
              <div className="flex-1">
                <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
                <div className="h-1.5 bg-gray-300 w-2/3"></div>
              </div>
            </div>
          </div>
        );
      
      case 'modernminimal':
        return (
          <div className="w-full h-full bg-white p-4">
            <div className="h-2.5 bg-gray-800 w-1/2 mb-2"></div>
            <div className="w-8 h-0.5 bg-gray-400 mb-3"></div>
            <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
            <div className="h-1.5 bg-gray-300 w-2/3 mb-3"></div>
            <div className="flex flex-wrap gap-1">
              <div className="h-1 bg-gray-200 w-1/4 rounded"></div>
              <div className="h-1 bg-gray-200 w-1/4 rounded"></div>
              <div className="h-1 bg-gray-200 w-1/4 rounded"></div>
            </div>
          </div>
        );
      
      case 'corporate':
        return (
          <div className="w-full h-full bg-white">
            <div className="bg-gray-800 h-14 p-2">
              <div className="h-2 bg-gray-400 w-2/3 mb-1"></div>
              <div className="h-1.5 bg-gray-600 w-1/2"></div>
            </div>
            <div className="p-3">
              <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-300 w-3/4"></div>
            </div>
          </div>
        );
      
      case 'elegant':
        return (
          <div className="w-full h-full bg-white p-4 font-serif">
            <div className="text-center mb-3">
              <div className="h-2.5 bg-gray-800 w-1/2 mx-auto mb-1"></div>
              <div className="w-12 h-px bg-gray-400 mx-auto"></div>
            </div>
            <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
            <div className="h-1.5 bg-gray-300 w-2/3 mb-2"></div>
            <div className="flex gap-2">
              <div className="flex-1 h-6 bg-gray-100"></div>
              <div className="flex-1 h-6 bg-gray-100"></div>
            </div>
          </div>
        );
      
      case 'split':
        return (
          <div className="w-full h-full flex p-0">
            <div className="w-2/5 bg-teal-700 p-2">
              <div className="h-2 bg-teal-400 w-3/4 mb-2"></div>
              <div className="h-1.5 bg-teal-500 w-full mb-1"></div>
              <div className="h-1.5 bg-teal-500 w-2/3"></div>
            </div>
            <div className="flex-1 bg-white p-2">
              <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-300 w-3/4"></div>
            </div>
          </div>
        );
      
      case 'compact':
        return (
          <div className="w-full h-full bg-white p-2">
            <div className="flex justify-between mb-2">
              <div className="h-2 bg-gray-800 w-1/3"></div>
              <div className="h-1.5 bg-gray-400 w-1/4"></div>
            </div>
            <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
            <div className="flex gap-2 mt-1">
              <div className="flex-1 h-6 bg-gray-100"></div>
              <div className="flex-1 h-6 bg-gray-100"></div>
              <div className="flex-1 h-6 bg-gray-100"></div>
            </div>
          </div>
        );
      
      case 'borderaccent':
        return (
          <div className="w-full h-full bg-white flex">
            <div className="w-1 bg-blue-500"></div>
            <div className="flex-1 p-3">
              <div className="h-2 bg-gray-800 w-2/3 mb-2"></div>
              <div className="h-1.5 bg-gray-300 w-full mb-1"></div>
              <div className="h-1.5 bg-gray-300 w-1/2"></div>
              <div className="mt-2 flex gap-1">
                <div className="h-1 bg-blue-200 w-1/3 rounded"></div>
                <div className="h-1 bg-blue-200 w-1/3 rounded"></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-2xl mb-1">📄</div>
              <div className="text-xs font-semibold">{templateName}</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full overflow-hidden">
      {getPreview()}
    </div>
  );
};

export default TemplatePreview;